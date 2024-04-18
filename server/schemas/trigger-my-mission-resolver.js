import dotenv from "dotenv";
dotenv.config();
import { ai } from "../config/openAI.config.js";
import { Current_Mission } from "../models/Current_Mission.js";
import { Activities } from "../models/Activities.js";
import { Mission_Activities } from "../models/Mission_Activities.js";
import { GraphQLError } from "graphql";

export const TriggerMyMissionMutation = {
  // Define the triggerMyMission resolver
  async triggerMyMission(
    parent,
    { userId, city, state, missionType, missionId },
    req
  ) {
    // if (!req.userInfo) {
    //   throw new GraphQLError("You are not authorized to perform this action.", {
    //     extensions: {
    //       code: "FORBIDDEN",
    //     },
    //   });
    // }

    // Create the message from the user data
    const questionForAI = `Create a comma-delimited ${missionType} list in ${city}, ${state} without any extra words`;

    // Call the OpenAI API (ChatGPT) to generate a response
    const completion = await ai.chat.completions.create({

      // Define a message to send to ChatGPT
      messages: [{ role: "system", content: questionForAI }],
      model: "gpt-3.5-turbo",
    });
    const triggeredMission = completion.choices[0].message.content;

    // Split the triggered mission on the comma to get the list of activities
    const missionActivities = triggeredMission.split(",");

    // Save the triggered mission name to the database
    const currentMissionSaved = await Current_Mission.create({
      name: missionType + " in " + city + ", " + state,
      points: 100,
      userId: req.body.variables.userId,
      missionTypeId: missionId,
    });
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
        description: missionType,
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
  },
};
