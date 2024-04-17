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
  async triggerMyMission(
    parent,
    { userId, city, state, missionName, missionId },
    req
  ) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }

    console.log(
      userId + " " + city + " " + state + " " + missionName + " " + missionId
    );
    // Create the message from the user data
    const questionForAI = `Create a comma-delimited ${missionName} list in ${city}, ${state} without any extra words`;
    // Call the OpenAI API (ChatGPT) to generate a response
    const completion = await ai.chat.completions.create({
      // Define a message to send to ChatGPT
      messages: [{ role: "system", content: questionForAI }],
      model: "gpt-3.5-turbo",
    });
    // console.log(completion);
    // console.log("------------------------");
    // console.log(completion.choices[0]);
    // // Save the response from ChatGPT to the database
    // console.log(completion.choices[0].message.content);
    //console.log(completion.choices[0].message.content);
    const triggeredMission = completion.choices[0].message.content;
    // Split the triggered mission on the comma to get the list of activities
    const missionActivities = triggeredMission.split(",");
    // Save the triggered mission name to the database
    //console.log(req.body.variables.userId);
    const currentMissionSaved = await Current_Mission.create({
      name: missionName + " in " + city + ", " + state,
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
    missionActivities.forEach(async (activity) => {
      const activitySaved = await Activities.create({
        name: activity,
        description: missionName,
        missionTypeId: missionId,
      });
      // Make sure nothing went wrong
      if (activitySaved === null) {
        throw new GraphQLError("Saving a mission activity failed", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
          },
        });
      }
      // console.log('currentMissionSaved');
      // console.log(currentMissionSaved);
      // console.log(currentMissionSaved.dataValues.id);
      // console.log('activitiesSaved');
      // console.log(activitySaved);
      // console.log(activitySaved.dataValues.id);
      // Save the data to mission_activities to join the activities to the mission
      const missionActivitiesSaved = await Mission_Activities.create({
        missionId: currentMissionSaved.dataValues.id,
        activityId: activitySaved.dataValues.id,
      });
      // Make sure nothing went wrong
      if (missionActivitiesSaved === null) {
        throw new GraphQLError(
          "Saving a link between mission and activity failed",
          {
            extensions: {
              code: "INTERNAL_SERVER_ERROR",
            },
          }
        );
      }
    });
    // Return the response from ChatGPT
    return triggeredMission;
    //return "This will be the response from CHAT GPT"
  },
};
