// make a search to chat gpt api
// https://api.openai.com/v1/engines/davinci-codex/completions

export const testOpenAI = () => {
    return fetch("/api/openai");
};


import OpenAI from "openai";

const ai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_KEY });

export const aiTest = async () => {
  const completion = await ai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}