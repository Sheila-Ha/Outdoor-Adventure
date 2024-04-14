import dotenv from "dotenv";
dotenv.config();

// Import the files needed to communicate with ChatGPT (OpenAI package)
import OpenAI from "openai";
const ai = new OpenAI({ apiKey: process.env.OPENAI_KEY }); // Use the key from the .env file

export const TriggerMyMissionMutation = {
  // TODO (Sheila): finish passing in variables needed to build the AI question
  // Define the triggerMyMission resolver
  async triggerMyMission (parent, { missionType }, req) {
    console.log(missionType);
    // TODO (Sheila): finish creating the message from the user data
    // Call the OpenAI API (ChatGPT) to generate a response

    // const completion = await ai.chat.completions.create({
    //   // Define a message to send to ChatGPT
    //   messages: [{ role: "system", content: "You are a helpful assistant." }],
    //   model: "gpt-3.5-turbo",
    // });
    // // TODO (Sheila): finish returning proper response once a valid API key is available
    // console.log(completion);
    // console.log(completion.choices[0]);
    // // Return the response from ChatGPT
    // return completion.choices[0];
    return "This will be the response form CHAT GPT"
  }
};
