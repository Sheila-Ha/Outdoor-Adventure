// import { User } from "../models/User.js";
import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";

export const resolvers = {
  Query: {},
  Mutation: {
    ...LogInSignUpMutation,
  },
};
