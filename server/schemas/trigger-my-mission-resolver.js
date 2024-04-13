import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
const ai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export const TriggerMyMissionMutation = {
  // triggerMyMission: (parent, args, context, info) => {
  //   // Your logic here
  //   const { userId, missionType } = args;
  //   //return triggerMyMission(userId, missionType);
  async triggerMyMission (parent, { missionType }, req) {
    console.log(missionType);
    const completion = await ai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    console.log(completion.choices[0]);
    return completion.choices[0];
  }
};
