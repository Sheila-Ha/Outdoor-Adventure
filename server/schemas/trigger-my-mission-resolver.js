import dotenv from "dotenv";
dotenv.config();
import { ai } from "../config/openAI.config.js";
import { Current_Mission } from "../models/Current_Mission.js";
import { Activities } from "../models/Activities.js";
import { Mission_Activities } from "../models/Mission_Activities.js";
import { GraphQLError } from "graphql";

// Import the files needed to communicate with ChatGPT (OpenAI package)
// import OpenAI from "openai";
// const ai = new OpenAI({ apiKey: process.env.OPENAI_KEY }); // Use the key from the .env file

export const TriggerMyMissionMutation = {
  // TODO (Sheila): finish passing in variables (location) needed to build the AI question
  // Define the triggerMyMission resolver
  async triggerMyMission(parent, { missionName, missionId }, req) {
    console.log(req);
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }

    console.log(missionName + " " + missionId);
    // Call the OpenAI API (ChatGPT) to generate a response
    const completion = await ai.chat.completions.create({
      // Define a message to send to ChatGPT
      // TODO (Sheila): finish creating the message from the user data (it is hard coded for now for testing)
      messages: [{ role: "system", content: "What is the capital of SD?" }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    // console.log("------------------------");
    // console.log(completion.choices[0]);
    // // Save the response from ChatGPT to the database
    // console.log(completion.choices[0].message.content);
    //console.log(completion.choices[0].message.content);
    const triggeredMission = completion.choices[0].message.content;
    // Save the triggered mission name to the database
    //console.log(req.body.variables.userId);
    const currentMissionSaved = await Current_Mission.create({
      name: "My " + missionName,
      points: 100,
      userId: req.body.variables.userId,
      missionTypeId: missionId,
    });
    // console.log('currentMissionSaved');
    // console.log(currentMissionSaved);
    if (currentMissionSaved === null) {
      throw new GraphQLError("Saving the mission failed", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
    // Save the activity data to the database "activities" table
    // TODO (Sheila): Probably will need to split up the result into separate activities in case we get a list back and do a createMany or loop or something
    const activitiesSaved = await Activities.create({
      name: "My " + missionName + " Activity",
      description: triggeredMission,
      missionTypeId: missionId,
    });
    if (activitiesSaved === null) {
      throw new GraphQLError("Saving a mission activity failed", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
    console.log('currentMissionSaved');
    console.log(currentMissionSaved);
    console.log(currentMissionSaved.dataValues.id);
    console.log('activitiesSaved');
    console.log(activitiesSaved);
    console.log(activitiesSaved.dataValues.id);
    // TODO (Sheila): Save the data to mission_activities to join the activities to this mission
    const missionActivitiesSaved = await Mission_Activities.create({
      missionId: currentMissionSaved.dataValues.id,
      activityId: activitiesSaved.dataValues.id,
    });
    if (missionActivitiesSaved === null) {
      throw new GraphQLError("Saving a link between mission and activity failed", {
        extensions: {
          code: "INTERNAL_SERVER_ERROR",
        },
      });
    }
    // Return the response from ChatGPT
    return triggeredMission;
    //return "This will be the response from CHAT GPT"
  },
};
