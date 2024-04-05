// import { User } from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";

import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

export const resolvers = {
  Query: {
    async findUsers() {
      return [];
    },
    async loginUser(parent, args, req) {
      return req.user;
    },
  },
  Mutation: {
    async login(parent, { email, password }, req) {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw new GraphQLError(
          "You are not authorized to perform this action.",
          {
            extensions: {
              code: "FORBIDDEN",
            },
          }
        );
      }
      if (!user.checkPassword(password)) {
        throw new GraphQLError(
          "You are not authorized to perform this action.",
          {
            extensions: {
              code: "FORBIDDEN",
            },
          }
        );
      }
      const userInfo = {
        id: user.id,
        email: user.email,
        lastLogin: user.lastLogin,
        memberSince: user.memberSince
      };

      const token = jwt.sign({ userInfo: userInfo }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 2,
      });
      return token;
    },
  },
};
