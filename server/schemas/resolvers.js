// import { User } from "../models/User.js";
import { GraphQLError } from "graphql";
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
    },
  },
};
