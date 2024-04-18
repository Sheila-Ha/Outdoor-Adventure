import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";
import { TriggerMyMissionMutation } from "./trigger-my-mission-resolver.js";
import { FunFactQuery } from "./fun-fact-resolver.js";
import { LeaderBoardQuery } from "./leaderboard-resolver.js";
import { CurrentMissionQuery } from "./current-mission-resolver.js";
import { ChangePasswordMutation } from "./changePasswordResolver.js";
import { ChangeEmailMutation } from "./changeEmailResolver.js";
import {
  User,
  Activities,
  Explore_Level,
  Mission_Activities,
  Mission_Types,
  Current_Mission,
} from "../models/index.js";

export const resolvers = {
  Query: {
    ...FunFactQuery,
    ...LeaderBoardQuery,
    ...CurrentMissionQuery,
    async findUsers() {
      return User.findAll();
    },

    async loginUser(parent, args, req) {
      return req.user;
    },

    async getAllExploreLevels() {
      return Explore_Level.findAll();
    },

    async getUserMissionActivities(parent, args) {
      return Mission_Activities.findAll();
    },
      
    async getAllMissionTypes() {
      return Mission_Types.findAll();
    },

    async getAllActivities() {
      return Activities.findAll();
    },

    async getAllMissionActivities() {
      return Mission_Activities.findAll();
    },

    async getUserMissionActivities(parent, { userId }) {
      return Mission_Activities.findAll({ userId: userId });
    },

    async getCurrentMission() {
      return Current_Mission.findAll();
    },
  },

  Mutation: {
    ...LogInSignUpMutation,
    ...TriggerMyMissionMutation,
    ...ChangePasswordMutation,
    ...ChangeEmailMutation,
  },
};
