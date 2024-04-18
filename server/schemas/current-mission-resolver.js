import { GraphQLError } from "graphql";
import { Current_Mission } from "../models/index.js";
import { Activities, Mission_Activities } from "../models/index.js";

export const CurrentMissionQuery = {
  async getAllCurrentMissions(parent, args, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      const currentMission = await Current_Mission.findAll({
        where: {
          userId: req.userInfo.id,
        },
      });
      return currentMission.map((mission) => mission.toJSON());
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
  async getCurrentMissionByMissionId(parent, { missionId }, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      const currentMission = await Current_Mission.findOne({
        where: {
          id: missionId,
          userId: req.userInfo.id
        }
      });
      return currentMission.toJSON();
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
  async getCurrentMissionActivities(parent, { missionId }, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      console.log(missionId);
      const currentMissionActivities = await Activities.findAll({
        include: [{
          model: Mission_Activities,
          required: true,
          where: {
            missionId: missionId,
          },
        }]
      });
      console.log(currentMissionActivities);
      return currentMissionActivities.map((activity) => activity.toJSON());
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};