// import { CurrentMission } from "../models/index.js";
import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";
import { askChatGPT } from "../utils/openai-routes.js";

export const resolvers = {
  Query: {
    async findUsers() {
      return [];
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

    async askChatGPT(parent, args, req) {
      console.log(req);
      const chatGPTResponse = await askChatGPT();
      return {
        response: chatGPTResponse
      };
    },
    // async getCurrentMission(parent, {userId}, req) {
    //   return CurrentMission.findById( userId );
    // },
  },
  Mutation: {
    ...LogInSignUpMutation,
    // async deleteCurrentMission(parent, {id}, req) {
    //     return CurrentMission.findOneAndDelete({
    //       _id: id,
    //     });
    //   }
  },

  //
};
