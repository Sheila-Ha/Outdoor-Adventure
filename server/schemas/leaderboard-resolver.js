import { GraphQLError } from "graphql";
import { Current_Mission, User } from "../models/index.js";
import sequelize from "../config/connection.js";

export const LeaderBoardQuery = {
  async leaderBoard(parent, args, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try {
      const currentMission = await Current_Mission.findAll({
        attributes: [
          [sequelize.fn("SUM", sequelize.col("points")), "total_points"],
        ],
        include: [
          {
            model: User,
            attributes: ["username"],
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
          id: index,
          score: item.total_points,
          name: item.user.username,
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          subtitle: "Elk",
        };
      });
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};
