import sequelize from "../config/connection.js";
/*import User from "../models/User.js";
import Explore_Level from "../models/Explore_Level.js";
import Current_Mission from "../models/Current_Mission.js";
import Activities from "../models/Activities.js";
import Mission_Activities from "../models/Mission_Activities.js";
import Mission_Types from "../models/Mission_Types.js";
*/
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

  const missionType1 = await Mission_Types.create({
    name: "Scavenger Hunt",
    description: "Find items or do activities for points.",
  });

  const missionType2 = await Mission_Types.create({
    name: "Star Gazing",
    description: "Description 2.",
  });

  // await Activities.create({
  //   id: 1,
  //   name: "Find a leaf.",
  //   description: "Leaves can be found on the ground under trees and bushes",
  //   missionTypeId: 1
  // });

  // await Mission_Activities.create({
  //   id: 1,
  //   complete: false,
  //   missionId: 1,
  //   activityId: 1,
  // });

  await Explore_Level.create({
    id: 1,
    name: "Tortoise",
    pointsRequired: 1,
  });

  const salidam = await User.create({
    username: "salidam",
    email: "email@email.com",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "Salida",
    lastName: "M",
  });

  const user1 = await User.create({
    username: "user1",
    email: "user1@email.com",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "User",
    lastName: "1",
  });

  const user2 = await User.create({
    username: "user2",
    email: "user2@email.com",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "User",
    lastName: "2",
  });

  const currentMission1 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: salidam.id,
    missionTypeId: missionType1.id,
  });

  const currentMission2 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: salidam.id,
    missionTypeId: missionType2.id,
  });

  const currentMission3 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: user1.id,
    missionTypeId: missionType1.id,
  });

  const currentMission4 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: user1.id,
    missionTypeId: missionType2.id,
  });

  const currentMission5 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    userId: user2.id,
    missionTypeId: missionType1.id,
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
  sequelize.close();
})();
