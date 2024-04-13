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

  await Mission_Types.create({
    id: 1,
    name: "Scavenger Hunt",
    description: "Find items or do activities for points."
  });

  await Activities.create({
    id: 1,
    name: "Find a leaf.",
    description: "Leaves can be found on the ground under trees and bushes",
    missionTypeId: 1
  });
  
  await Current_Mission.create({
    id: 1,
    name: "Forest Scavenger Hunt",
    missionTypeId: 1
  });

  await Mission_Activities.create({
    id: 1,
    complete: false,
    missionId: 1,
    activityId: 1
  });

  await Explore_Level.create({
    id: 1,
    name: "Tortoise",
    pointsRequired: 1
  });

  await User.create({
    username: "salidam",
    email: "email@email.com",
    password: "password",
    currentLeaderBoardLevel: 1,
    firstName: "Salida",
    lastName: "M"
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
