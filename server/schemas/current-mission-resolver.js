import { GraphQLError } from "graphql";
import { Current_Mission } from "../models/index.js";
import { Activities, Mission_Activities } from "../models/index.js";

export const CurrentMissionQuery = {
  // Get all current missions for the logged in user (overall className is CurrentMissionQuery)
  async getAllCurrentMissions(parent, args, req) {
    // 
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      // GET all current missions for the logged in user (actual call to the database)
      const currentMission = await Current_Mission.findAll({
        where: {
          userId: req.userInfo.id,
        },
        // Order by id in descending order (newest mission is first)
        order: [["id", "DESC"]],
      });
      return currentMission.map((mission) => mission.toJSON());
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
  // Get a single current mission by its id
  async getCurrentMissionByMissionId(parent, { missionId }, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    // GET a single current mission by its id
    try {
      const currentMission = await Current_Mission.findOne({
        where: {
          id: missionId,
          userId: req.userInfo.id,
        },
      });
      return currentMission.toJSON();
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
  // Get all activities for the current mission
  async getCurrentMissionActivities(parent, { missionId }, req) {
    // Check if the user is logged in
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    // GET all activities for the current mission
    try {
      console.log(missionId);
      // GET all activities for the current mission
      const currentMissionActivities = await Current_Mission.findOne({
        where: {
          id: missionId,
        },
        include: [
          {
            model: Activities,
            through: {
              model: Mission_Activities,
            },
          },
        ],
      });
      console.log(currentMissionActivities);
      return currentMissionActivities.activities;
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};
