import { GraphQLError } from "graphql";
import { Current_Mission } from "../models/index.js";

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
};
