import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";
import { TriggerMyMissionMutation } from "./trigger-my-mission-resolver.js";
import { FunFactQuery } from "./fun-fact-resolver.js";
import { LeaderBoardQuery } from "./leaderboard-resolver.js";
import { ChangePasswordMutation } from "./changePasswordResolver.js";
import {
  User,
  Activities,
  Current_Mission,
  Explore_Level,
  Mission_Activities,
  Mission_Types,
} from "../models/index.js";

export const resolvers = {
  Query: {
    ...FunFactQuery,
    ...LeaderBoardQuery,
    async findUsers() {
      return User.findAll();
    },

    async loginUser(parent, args, req) {
      return req.user;
    },

    async getAllExploreLevels() {
      return Explore_Level.findAll();
    },

    async getAllCurrentMissions() {
      return Current_Mission.findAll();
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
  },

  Mutation: {
    ...LogInSignUpMutation,
    ...TriggerMyMissionMutation,
    ...ChangePasswordMutation,
  },
};
