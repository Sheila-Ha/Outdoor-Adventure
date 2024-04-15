import {GraphQLError} from "graphql";

//   TODO: Update with real data
const leaderboardData = [
    {
      id: 1,
      name: "JanePHD92",
      score: 1250,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      subtitle: "Elk",
    },
    {
      id: 2,
      name: "BobbyB0y11",
      score: 950,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      subtitle: "Squirrel",
    },
    {
      id: 3,
      name: "Mary1968",
      score: 800,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      subtitle: "Lion",
    },
    {
      id: 4,
      name: "HollyB518",
      score: 750,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      subtitle: "Squirrel",
    },
    {
      id: 5,
      name: "MarkM93",
      score: 700,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      subtitle: "Zebra",
    },
    {
      id: 6,
      name: "NatureFr3Ak63",
      score: 650,
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      subtitle: "Red Fox",
    },
    {
      id: 7,
      name: "Woodstock87",
      score: 600,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      subtitle: "Mouse",
    },
    {
      id: 8,
      name: "VenusG22",
      score: 550,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      subtitle: "Pig",
    },
    {
      id: 9,
      name: "IFoundRocks66",
      score: 500,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      subtitle: "Mouse",
    },
    {
      id: 10,
      name: "ShadowWar04",
      score: 450,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      subtitle: "Tortoise",
    },
  ];

export const LeaderBoardQuery = {
  async leaderBoard(parent, args, req) {
    if (!req.userInfo) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    try{
        return leaderboardData;
    }catch(error){
        throw new GraphQLError(error);
    }
  },
};
