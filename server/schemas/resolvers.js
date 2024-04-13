import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";
import { TriggerMyMissionMutation } from "./trigger-my-mission-resolver.js";
import { User, Activities, Current_Mission, Explore_Level, Mission_Activities, Mission_Types  } from '../models/index.js';

export const resolvers = {
  Query: {

    async findUsers() {
      return User.findAll();
    },

    async loginUser(parent, args, req) {
      return req.user;
    },

    async funFact(parent, args) {
      return {
        title: "The World's Longest Hiking Trail",
        description:
          "The Great Trail, formerly known as the Trans Canada Trail, is a network of trails that stretches across the entire country, covering over 27,000 kilometers. It's the longest recreational trail in the world and offers a wide variety of activities, including hiking, cycling, cross-country skiing, and snowmobiling.",
      };
    },

    async getAllExploreLevels() {
      return Explore_Level.findAll();
    },

    async getAllCurrentMissions() {
      return Current_Mission.findAll();
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
  },
};
