import { GraphQLError } from "graphql";
import { Current_Mission, User } from "../models/index.js";
import sequelize from "../config/connection.js";

export const UserProfileInfoQuery = {
  async getUserProfileInfo(parent, args, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      const currentMission = await Current_Mission.findAll({
        where: { userId: req.userInfo.id },
        limit: 10,
        attributes: [
          [sequelize.fn("SUM", sequelize.col("points")), "total_points"],
          [sequelize.fn("COUNT", sequelize.col("*")), "total_mission"],
        ],
        include: [
          {
            model: User,
            attributes: ["username", "image", "memberSince", "id"],
            required: true,
          },
        ],
        group: ["username", "user.id"],
        order: [["total_points", "DESC"]],
      });
      const highestPoint = currentMission.map((point) => point.toJSON());
      // console.log(highestPoint);
      return highestPoint.map((item, index) => {
        return {
          id: item.user.id,
          totalPoints: item.total_points,
          numberOfMissionCompleted: item.total_mission,
          username: item.user.username,
          image: item.user.image || "https://github.com/shadcn.png",
        };
      })[0];
    //   console.log(highest, "hightest");
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};
