import { GraphQLError } from "graphql";
import { Current_Mission, User } from "../models/index.js";
import sequelize from "../config/connection.js";
import { Op } from "sequelize";
import dayjs from "dayjs";

export const LeaderBoardQuery = {
  async leaderBoard(parent, args, req) {
    console.log(args, "args");
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    let weeksToGoBack = args.isWeekly ? 7 : 52;
    try {
      const currentMission = await Current_Mission.findAll({
        where: {
          completeDate: {
            [Op.gte]: new Date(
              new Date() - weeksToGoBack * 24 * 60 * 60 * 1000
            ),
          },
        },
        limit: 10,
        attributes: [
          [sequelize.fn("SUM", sequelize.col("points")), "total_points"],
        ],
        include: [
          {
            model: User,
            attributes: ["username", "image"],
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
          image: item.user.image || "https://github.com/shadcn.png",
          subtitle: "Elk",
        };
      });
    } catch (error) {
      throw new GraphQLError(error);
    }
  },
};
