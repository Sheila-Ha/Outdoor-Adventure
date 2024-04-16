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

  const missionType1 = await Mission_Types.create({
    name: "Scavenger Hunt",
    description: "Find items or do activities for points.",
  });

  const missionType2 = await Mission_Types.create({
    name: "Star Gazing",
    description: "Description 2.",
  });

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
    name: "Forest Scavenger Hunt",
    userId: salidam.id,
    points: 1000,
    missionTypeId: missionType2.id,
  });

  const missionActivity2 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission2.id,
    activityId: activity3.id,
  });

  const currentMission3 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
    points: 500,
    userId: user1.id,
    missionTypeId: missionType1.id,
  });

  const missionActivity3 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission3.id,
    activityId: activity4.id,
  });

  const currentMission4 = await Current_Mission.create({
    name: "Forest Scavenger Hunt",
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
    name: "Forest Scavenger Hunt",
    points: 100,
    userId: user2.id,
    missionTypeId: missionType1.id,
  });

  const missionActivity5 = await Mission_Activities.create({
    complete: false,
    missionId: currentMission5.id,
    activityId: activity2.id,
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
  const cmData = await Current_Mission.findAll({
    attributes: [
      [sequelize.fn("SUM", sequelize.col("points")), "total_points"],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
        required: true,
      },
    ],
    group: ["username", "user.id"],
    order: [["total_points", "DESC"]],
  });
  console.log(cmData.map((data) => data.toJSON()));
  const mTypes = await Mission_Types.findAll();
  console.log(mTypes);
  sequelize.close();
})();
