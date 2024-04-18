import { User } from "./User.js";
import { Explore_Level } from "./Explore_Level.js";
import { Current_Mission } from "./Current_Mission.js";
import { Mission_Types } from "./Mission_Types.js";
import { Activities } from "./Activities.js";
import { Mission_Activities } from "./Mission_Activities.js";

// User connection to ExploreLevel
// User has one ExploreLevel but ExploreLevel can have many Users
Explore_Level.hasMany(User, {
  foreignKey: "exploreLevelId",
  onDelete: "CASCADE",
});

User.belongsTo(Explore_Level, {
  foreignKey: "exploreLevelId",
});

// User connection to CurrentMission
// CurrentMission has one User but User can have many CurrentMissions
User.hasMany(Current_Mission, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Current_Mission.belongsTo(User, {
  foreignKey: "userId",
});

// MissionTypes connection to CurrentMission
// CurrentMission has one MissionTypes but MissionTypes can have many CurrentMission
Mission_Types.hasMany(Current_Mission, {
  foreignKey: "missionTypeId",
  onDelete: "CASCADE",
});

Current_Mission.belongsTo(Mission_Types, {
  foreignKey: "missionTypeId",
});

// Activities connection to MissionType
// Activities has one MissionType but MissionTypes can have many Activities
Mission_Types.hasMany(Activities, {
  foreignKey: "missionId",
  onDelete: "CASCADE",
});

Activities.belongsTo(Mission_Types, {
  foreignKey: "activityId",
});

// CurrentMission connection with Activities
// CurrentMission has many Activities AND Activities has many CurrentMissions
/*Current_Mission.hasMany(Activities, {
  through: {
    model: Mission_Activities,
//    unique: false
  },
    // Define an alias for when data is retrieved
  as: 'missionId'
});

Activities.hasMany(Current_Mission, {
 through: {
  model: Mission_Activities,
//  unique: false
 },
   // Define an alias for when data is retrieved
 as: 'activityId'
});
*/
//Current_Mission.belongsToMany(Activities, { through: Mission_Activities });
//Activities.belongsToMany(Current_Mission, { through: Mission_Activities });
Current_Mission.belongsToMany(Activities, { through: Mission_Activities, foreignKey: 'activityId' });
Activities.belongsToMany(Current_Mission, { through: Mission_Activities, foreignKey: 'missionId' });
//
// We package our models and export them as an object so we can import them together and use their proper names
export {
  User,
  Explore_Level,
  Current_Mission,
  Mission_Types,
  Activities,
  Mission_Activities,
};
