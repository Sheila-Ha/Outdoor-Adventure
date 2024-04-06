// import { User } from "../models/User.js";
import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";

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
    ...LogInSignUpMutation,
  },
};
