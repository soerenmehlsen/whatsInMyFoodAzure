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
  
    const systemPrompt = `You are given an image of a food ingredient list. Your job is to extract each ingredient from the list and convert it into the following JSON format:

[{"name": "name of the ingredient"}, ...]

Please make sure to include all ingredients from the ingredient list and nothing else. Do not include descriptions or any other additional information. ONLY RETURN JSON. It is very important that you strictly follow this format and only provide the names of the ingredients.`;
  
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

    const ingredientItems = output?.choices[0]?.message?.content;
    console.log({ ingredientItems });

    // Defining the schema we want our data in
  const ingredientSchema = z.array(
    z.object({
      name: z.string().describe("The name of the ingredient item"),
      description: z
        .string()
        .describe(
          "Write a short description of the ingredient item, so normal people can understand what it is. The language has to be the same as names of ingredients."
        ),
    })
  );
  const jsonSchema = zodToJsonSchema(ingredientSchema, "ingredientSchema");

  const secondSystemPrompt = `You are provided with a list of ingredient names in JSON format. Your task is to enhance this list by adding a short, user-friendly description for each ingredient. The final output should strictly adhere to the following JSON format:

[
  {"name": "name of the ingredient", "description": "description of the ingredient"},
  ...
]

Descriptions should be clear and concise, explaining what each ingredient is in simple terms that anyone can understand. The language used for the descriptions must match the language of the ingredient names.

ONLY RETURN JSON. It is crucial that your response is properly formatted as JSON. Here is the input list:
`;
  
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
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    // @ts-expect-error - this is not typed in the API
    response_format: { type: "json_object", schema: jsonSchema },
  });

  let ingredientItemsJSON;
  if (extract?.choices?.[0]?.message?.content) {
      ingredientItemsJSON = JSON.parse(extract?.choices?.[0]?.message?.content);
    console.log({ ingredientItemsJSON });
  }

  return Response.json({ ingredient: ingredientItemsJSON });

}

export const maxDuration = 60;