// import { CurrentMission } from "../models/index.js";
import { LogInSignUpMutation } from "./logIn-signUp-resolver.js";

export const resolvers = {
  Query: {
    async findUsers() {
      return [];
    },

    async loginUser(parent, args, req) {
      return req.user;
    },

    async funFact(parent, args) {
      return (
        <div>
          <h2>{args.title}</h2>
          <p>{args.description}</p>
        </div>
      );
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
