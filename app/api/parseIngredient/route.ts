import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

// Helper function to clean JSON response
function cleanJsonResponse(text: string): string {
  // Remove markdown code blocks and any extra whitespace
  return text
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .trim();
}

export async function POST(request: Request) {
  const { ingredientUrl } = await request.json();

  console.log({ ingredientUrl });

  if (!ingredientUrl) {
    return Response.json(
      { error: "No ingredient URL provided" },
      { status: 400 },
    );
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  // extract ingredients from the image
  const systemPrompt = `You are given an image of a food ingredient list. Your job is to extract all the ingredients from the list including the ingredients with parentheses and convert it into the following JSON format: 

[{"name": "name of the ingredient or numbers"}, ...]

ONLY RETURN THE OUTPUT AS JSON FORMAT. It is very important that you strictly follow this format.`;

  const outputStartTime = Date.now();
  
  // Fetch the image data
  const imageResponse = await fetch(ingredientUrl);
  const imageData = await imageResponse.arrayBuffer();
  
  // Convert array buffer to base64
  const base64Image = Buffer.from(imageData).toString('base64');
  
  const result = await model.generateContent([
    systemPrompt,
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64Image
      }
    }
  ]);
  
  const response = await result.response;
  const ingredientItems = cleanJsonResponse(response.text());
  console.log(`First API call duration: ${Date.now() - outputStartTime}ms`);
  console.log({ ingredientItems });

  // Add ingredients with descriptions
  const ingredientSchema = z.array(
    z.object({
      name: z.string().describe("The name of the ingredient item"),
      description: z
        .string()
        .describe("Write a short description of the ingredient item"),
    }),
  );
  const jsonSchema = zodToJsonSchema(ingredientSchema, "ingredientSchema");

  const secondSystemPrompt = `You are provided with a list of ingredient names in JSON format. Some ingredient names contain multiple E-numbers within parentheses. Your task is to enhance and split these ingredients so that each E-number becomes its own entry in the list, with a separate description for each E-number.

The final output should strictly adhere to the following JSON format:

[
  {"name": "name of the ingredient", "description": "description of the ingredient"},
  ...
]

When splitting ingredients with multiple E-numbers, follow these rules:
1. Create a separate entry for each E-number.
2. Retain the original ingredient name for context, but make the E-number the focus of each entry (e.g., "Smagsforstærker (E621)" becomes "E621").
3. Provide a clear, user-friendly explanation of each E-number.
4. Exclude duplicate descriptions and ensure clarity.
5. Exclude duplicate ingredient names.

You are a nutrition and food expert. Your task now is to provide formative descriptions that is clear and concise for each ingredients. The language used for the descriptions must match the language of the ingredient names.

ONLY RETURN JSON. It is crucial that your response is properly formatted as JSON.`;

  const extractStartTime = Date.now();
  const extractResult = await model.generateContent([
    { text: secondSystemPrompt },
    { text: ingredientItems }
  ]);
  
  const extractResponse = await extractResult.response;
  let ingredientItemsJSON;
  try {
    ingredientItemsJSON = JSON.parse(cleanJsonResponse(extractResponse.text()));
    console.log({ ingredientItemsJSON });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return Response.json(
      { error: 'Failed to parse ingredient descriptions' },
      { status: 500 }
    );
  }
  console.log(`Total request duration: ${Date.now() - extractStartTime}ms`);

  // Classify ingredients based on NOVA classification
  const novaPrompt = `You are a nutritionist and food scientist. Your job is to classify ingredients based on the NOVA food classification system. For each ingredient provided in JSON format, determine the NOVA group it belongs to and include a reason for your classification.

NOVA classification:
1. Unprocessed or minimally processed foods
2. Processed culinary ingredients
3. Processed foods
4. Ultra-processed foods

Input:
${JSON.stringify(ingredientItemsJSON, null, 2)}

Expected output:
[
  {"name": "name of the ingredient", "description": "description of the ingredient", "nova_classification": "NOVA group", "reason": "reason for classification"},
  ...
]
The language used for the descriptions must match the language of the ingredient names.
ONLY RETURN JSON OUTPUT.`;

  const classifyNovaStartTime = Date.now();
  const novaResult = await model.generateContent([
    { text: novaPrompt }
  ]);
  
  const novaResponse = await novaResult.response;
  let classifiedIngredients;
  try {
    classifiedIngredients = JSON.parse(cleanJsonResponse(novaResponse.text()));
    console.log({ classifiedIngredients });
  } catch (error) {
    console.error('Error parsing NOVA classification JSON:', error);
    return Response.json(
      { error: 'Failed to parse NOVA classifications' },
      { status: 500 }
    );
  }

  console.log(
    `NOVA classification request duration: ${Date.now() - classifyNovaStartTime}ms`,
  );

  return Response.json({ ingredient: classifiedIngredients });
}

export const maxDuration = 60;
