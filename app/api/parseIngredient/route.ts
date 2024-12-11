import { Together } from "together-ai"
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const together = new Together();

export async function POST(request: Request) {
    const { ingredientUrl } = await request.json();
  
    console.log({ ingredientUrl });
  
    if (!ingredientUrl) {
      return Response.json({ error: "No ingredient URL provided" }, { status: 400 });
    }
  
    const systemPrompt = `You are given an image of a food ingredient list. Your job is to extract all the ingredients from the list including the ingredients with parentheses and convert it into the following JSON format: 

[{"name": "name of the ingredient or numbers"}, ...]

ONLY RETURN THE OUTPUT AS JSON FORMAT. It is very important that you strictly follow this format.`;

    const outputStartTime = Date.now();
    const output = await together.chat.completions.create({
      model: "meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo",
      messages: [
        {
          role: "user",
          // @ts-expect-error api is not typed
          content: [
            { type: "text", text: systemPrompt },
            {
              type: "image_url",
              image_url: {
                url: ingredientUrl,
              },
            },
          ],
        },
      ],
    });
    console.log(`First API call duration: ${Date.now() - outputStartTime}ms`);

    const ingredientItems = output?.choices[0]?.message?.content;
    console.log({ ingredientItems });

    // Defining the schema we want our data in
  const ingredientSchema = z.array(
    z.object({
      name: z.string().describe("The name of the ingredient item"),
      description: z
        .string()
        .describe(
          "Write a short description of the ingredient item"
        ),
    })
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

Descriptions should be clear and concise, explaining what each ingredient is in simple terms that anyone can understand. The language used for the descriptions must match the language of the ingredient names.

ONLY RETURN JSON. It is crucial that your response is properly formatted as JSON.`;

  const extractStartTime = Date.now();
  const extract = await together.chat.completions.create({
    messages: [
      {
        role: "system",
        content: secondSystemPrompt,
      },
      {
        role: "user",
        content: ingredientItems!,
      },
    ],
    model: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo-vLLM-json",
    // @ts-expect-error - this is not typed in the API
    response_format: { type: "json_object", schema: jsonSchema },
  });

  let ingredientItemsJSON;
  if (extract?.choices?.[0]?.message?.content) {
      ingredientItemsJSON = JSON.parse(extract?.choices?.[0]?.message?.content);
    console.log({ ingredientItemsJSON });
  }

  console.log(`Total request duration: ${Date.now() - extractStartTime}ms`);
  return Response.json({ ingredient: ingredientItemsJSON });

}

export const maxDuration = 60;