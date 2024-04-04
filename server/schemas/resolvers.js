// import { User } from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
const user = [
  {
    id: 1,
    name: "Salida",
    interest: ["Biking", "Hiking"],
  },
];

export const resolvers = {
  Query: {
    async findUsers() {
      return user;
    },
  },
  Mutation: {
    async login(parent, { email, password }, context) {
      if (email !== "admin" || password !== "admin") {
        throw new GraphQLError(
          "You are not authorized to perform this action.",
          {
            extensions: {
              code: "FORBIDDEN",
            },
          }
        );
      }
      const token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 2,
      });
      return token;
    },
  },
};
