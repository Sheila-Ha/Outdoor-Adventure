// import { User } from "../models/User.js";
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
};
