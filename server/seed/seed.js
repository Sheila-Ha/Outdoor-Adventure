import sequelize from "../config/connection.js";
//import { missionTypesSeeds } from "./missionTypesSeeds.json";

import {
  User,
  Explore_Level,
  Current_Mission,
  Activities,
  Mission_Activities,
  Mission_Types,
} from "../models/index.js";

(async function syncSequelize() {
  await sequelize.sync({ force: true });

  await Mission_Types.bulkCreate([
    {
      id: 1,
      name: "Scavenger Hunt",
      description:
        "Find the items in your list outside and earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 2,
      name: "Exercise",
      description:
        "Bring your exercise routines to the outdoors and earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 3,
      name: "Exploration",
      description:
        "Explore the outdoors in your community to earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 4,
      name: "Survival Skills",
      description:
        "Learn skills to camp and play outside to earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 5,
      name: "Nighttime",
      description:
        "Explore the outdoors at night. Find items and accomplish tasks to earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 6,
      name: "Astronomy",
      description:
        "Find items in the night sky to earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
    {
      id: 7,
      name: "Wildlife Spotting",
      description:
        "Find creatures in the wild, birds, reptiles and more outside to earn points towards your Mission",
      image: "",
      pointValue: 1,
    },
  ]);

  /*
  await Mission_Types.create({
    id: 1,
    name: "Scavenger Hunt",
    description: "Find items or do activities for points."
  });*/

  await Activities.create({
    id: 1,
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: 1,
  });

  await Current_Mission.create({
    id: 1,
    name: "Forest Scavenger Hunt",
    missionTypeId: 1,
  });

  await Mission_Activities.create({
    id: 1,
    complete: false,
    missionId: 1,
    activityId: 1,
  });

  await Explore_Level.bulkCreate([
    {
      id: 1,
      name: "Tortoise",
      pointsRequired: 1,
    },
    {
      id: 2,
      name: "Mouse",
      pointsRequired: 5,
    },
    {
      id: 3,
      name: "Pig",
      pointsRequired: 10,
    },
    {
      id: 4,
      name: "Squirrel",
      pointsRequired: 15,
    },
    {
      id: 5,
      name: "Black Mamba Snake",
      pointsRequired: 20,
    },
    {
      id: 6,
      name: "Elephant",
      pointsRequired: 25,
    },
    {
      id: 7,
      name: "Kangaroo",
      pointsRequired: 30,
    },
    {
      id: 8,
      name: "Grizzly Bear",
      pointsRequired: 35,
    },

    {
      id: 9,
      name: "Cat",
      pointsRequired: 40,
    },
    {
      id: 10,
      name: "Lion",
      pointsRequired: 45,
    },
  ]);

  await User.create({
    username: "salidam",
    email: "email@email.com",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "Salida",
    lastName: "M",
  });
  //await
  console.log("user data seeded");
  const userData = await User.findAll();
  console.log(userData);
  const exploreData = await Explore_Level.findAll();
  console.log(exploreData);
  const activitiesData = await Activities.findAll();
  console.log(activitiesData);
  const maData = await Mission_Activities.findAll();
  console.log(maData);
  const cmData = await Current_Mission.findAll();
  console.log(cmData);
  const mTypes = await Mission_Types.findAll();
  console.log(mTypes);
})();
