import User from "./User.js";
import ExploreLevel from "./ExploreLevel.js";
import CurrentMission from "./CurrentMission.js";
import Mission from "./Mission.js";
import Activity from "./Activity.js";
import MissionActivity from "./MissionActivity.js";

// User connection to ExploreLevel
ExploreLevel.hasMany(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.belongsTo(ExploreLevel, {
  foreignKey: "id",
});

// User connection to CurrentMission
CurrentMission.hasMany(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.belongsTo(CurrentMission, {
  foreignKey: "id",
});

// one to one CurrentMission has one Mission
CurrentMission.hasOne(Mission, {
  foreignKey: "currentMissionId",
  onDelete: "CASCADE",
});

Mission.belongsTo(CurrentMission, {
  foreignKey: "currentMissionId",
});

// one to many CurrentMission has many Activity
CurrentMission.hasMany(Activity, {
  foreignKey: "currentMissionId",
  onDelete: "CASCADE",
});

Activity.belongsTo(CurrentMission, {
  foreignKey: "currentMissionId",
});

// This is a many to many between Activity and Mission. The FK table is
// name MissionActivity
Mission.belongsToMany(Activity, {
  // Define the third table needed to store the foreign keys
  through: {
    model: MissionActivity,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "mission_activity",
});

Activity.belongsToMany(Mission, {
  // Define the third table needed to store the foreign keys
  through: {
    model: MissionActivity,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "activity_mission",
});

// We package our models and export them as an object so we can import them together and use their proper names
export {
  User,
  ExploreLevel,
  CurrentMission,
  Mission,
  Activity,
  MissionActivity,
};
