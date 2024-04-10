const OpenAI = require("openai");

const ai = new OpenAI({ apiKey: '<your api key here>' });

export const aiTest = async () => {
  const completion = await ai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}