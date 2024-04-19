import sequelize from "../config/connection.js";
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
  /*  await Explore_Level.create({
    id: 1,
    name: "Tortoise",
    pointsRequired: 1,
  });*/
  const exploreLevels = await Explore_Level.bulkCreate([
    {
      id: 1,
      name: "Mouse",
      pointsRequired: 500,
    },
    {
      id: 2,
      name: "Chipmunk",
      pointsRequired: 1500,
    },
    {
      id: 3,
      name: "Rabbit",
      pointsRequired: 3000,
    },
    {
      id: 4,
      name: "Otter",
      pointsRequired: 5000,
    },
    {
      id: 5,
      name: "Coyote",
      pointsRequired: 7500,
    },
    {
      id: 6,
      name: "Cougar",
      pointsRequired: 10500,
    },
    {
      id: 7,
      name: "Bear",
      pointsRequired: 14000,
    },
    {
      id: 8,
      name: "Moose",
      pointsRequired: 18000,
    },
    {
      id: 9,
      name: "Cat",
      pointsRequired: 22500,
    },
    {
      id: 10,
      name: "Lion",
      pointsRequired: 27500,
    },
  ]);

  const salidam = await User.create({
    username: "salidam",
    email: "email@email.com",
    image: "/images/avatar1.png",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "Salida",
    lastName: "M",
    city: "New York",
    state: "NY",
    memberSince: new Date(),
  });
  const user1 = await User.create({
    username: "user1",
    email: "user1@email.com",
    image: "/images/avatar2.png",
    memberSince: new Date(),
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "User",
    lastName: "1",
    city: "Minneapolis",
    state: "MN",
  });
  const user2 = await User.create({
    username: "user2",
    email: "user2@email.com",
    image: "/images/avatar3.png",
    memberSince: new Date(),
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "User",
    lastName: "2",
    city: "Orlando",
    state: "FL",
  });
  const missionTypes = await Mission_Types.bulkCreate([
    {
      name: "Outdoor Exercise",
      description: "Exercise outside - walk, run, ski... for points.",
    },
    {
      name: "Outdoor Exploration",
      description:
        "Explore the great outdoors, in a park, in your neighborhood, or in the city. Explore for points.",
    },
    {
      name: "Survival Skills",
      description: "Learn new skills to be safe outdoors and earn points.",
    },
    {
      name: "Nighttime Outdoor Exploration",
      description: "Explore the outdoors at night.",
    },
    {
      name: "Wildlife Spotting",
      description:
        "Creatures are outside everywhere. Find animals, insects, reptiles and fish for points.",
    },
  ]);
  const missionType1 = await Mission_Types.create({
    name: "Outdoor Scavenger Hunt",
    description: "Find items or do activities for points.",
  });

  const missionType2 = await Mission_Types.create({
    name: "Constellations and Space",
    description: "Description 2.",
  });

  const activities = await Activities.bulkCreate([
    {
      missionTypeId: 1,
      name: "Find a heart-shaped rock",
    },
    {
      missionTypeId: 1,
      name: "Find a four-leaf clover",
    },
    {
      missionTypeId: 1,
      name: "Find a robin",
    },
    {
      missionTypeId: 1,
      name: "Find an animal in the clouds",
    },
    {
      missionTypeId: 1,
      name: "Skip a rock in the water",
    },
    {
      missionTypeId: 1,
      name: "Find a walking stick",
    },
    {
      missionTypeId: 1,
      name: "Pick up a piece of garbage and put it in the trash",
    },
    {
      missionTypeId: 1,
      name: "Kayak",
    },
    {
      missionTypeId: 1,
      name: "Build a fire",
    },
    {
      missionTypeId: 1,
      name: "Find a bird nest",
    },
    {
      missionTypeId: 2,
      name: "See a falling star",
    },
    {
      missionTypeId: 2,
      name: "Find the planet Mars",
    },
    {
      missionTypeId: 2,
      name: "Find the planet Jupiter",
    },
    {
      missionTypeId: 2,
      name: "Find the planet Saturn",
    },
    {
      missionTypeId: 2,
      name: "Find the planet Venus",
    },
    {
      missionTypeId: 2,
      name: "Find the Milky Way galaxy",
    },
    {
      missionTypeId: 2,
      name: "Find a full moon",
    },
    {
      missionTypeId: 2,
      name: "Find a half moon",
    },
    {
      missionTypeId: 2,
      name: "Find a crescent moon",
    },
    {
      missionTypeId: 2,
      name: "Find the rabbit in the moon",
    },
  ]);
  const activity1 = await Activities.create({
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: missionType1.id,
  });
  const activity2 = await Activities.create({
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: missionType1.id,
  });
  const activity3 = await Activities.create({
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: missionType2.id,
  });
  const activity4 = await Activities.create({
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: missionType2.id,
  });
  const currentMission1 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: salidam.id,
    points: 2000,
    missionTypeId: missionType1.id,
  });
  const missionActivity1 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission1.id,
    activityId: activity1.id,
  });
  const currentMission2 = await Current_Mission.create({
    name: "Forest Scavenger Hunt0",
    userId: salidam.id,
    points: 1000,
    missionTypeId: missionType2.id,
  });
  const missionActivity2 = await Mission_Activities.create({
    complete: false,
    missionId: 1,
    activityId: activity3.id,
  });
  const currentMission3 = await Current_Mission.create({
    name: "Forest Scavenger Hunt1",
    points: 500,
    userId: user1.id,
    missionTypeId: missionType1.id,
  });
  const missionActivity3 = await Mission_Activities.create({
    complete: false,
    missionId: 1,
    activityId: activity4.id,
  });
  const currentMission4 = await Current_Mission.create({
    name: "Forest Scavenger Hunt2",
    points: 200,
    userId: user1.id,
    missionTypeId: missionType2.id,
  });
  const missionActivity4 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission4.id,
    activityId: activity4.id,
  });
  const currentMission5 = await Current_Mission.create({
    name: "Forest Scavenger Hunt3",
    points: 100,
    userId: user2.id,
    missionTypeId: missionType1.id,
  });
  const missionActivity5 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission5.id,
    activityId: activity2.id,
  });
  sequelize.close();
})();
