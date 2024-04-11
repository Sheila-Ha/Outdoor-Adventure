import { User } from "./User.js";
// import { ExploreLevel } from './ExploreLevel.js';
// import { CurrentMission } from './CurrentMission.js';
// import { MissionType } from './MissionType.js';
// import { ActivityType } from './ActivityType.js';
// import { ActivityArchive } from './ActivityArchive.js';
// import {CurrentMissionActivities} from './CurrentMissionActivities.js';

// User connection to ExploreLevel
// User has one ExploreLevel but ExploreLevel can have many Users

// ExploreLevel.hasMany(User, {
//   foreignKey: 'currentExploreLevel',
//   onDelete: 'CASCADE',
// });

// User.belongsTo(ExploreLevel, {
//   foreignKey: 'currentExploreLevel',
// });

// ActivityType connection to MissionType
// ActivityType has one MissionType but MissionTypes can have many ActivityTypes

// MissionType.hasMany(ActivityType, {
//   foreignKey: 'id',
//   onDelete: 'CASCADE',
// });

// ActivityType.belongsTo(MissionType, {
//   foreignKey: 'id',
// });

// User connection to CurrentMission
// User has one CurrentMission but CurrentMission can have many Users

// CurrentMission.hasMany(User, {
//   foreignKey: 'id',
//   onDelete: 'CASCADE',
// });

// User.belongsTo(CurrentMission, {
//   foreignKey: 'id',
// });

// CurrentMission connection with MissionType
// CurrentMission has one MissionType but MissionType can have many CurrentMissions

// MissionType.hasMany(CurrentMission, {
//   foreignKey: 'id',
//   onDelete: 'CASCADE',
//   });

//   CurrentMission.belongsTo(MissionType, {
//     foreignKey: 'id',
//   });

// CurrentMission connection with ActivityType
// CurrentMission has many ActivityTypes AND ActivityType has many CurrentMissions
// For each CurrentMission ActivityType, there is a completion boolean that indicates
// whether or not the activity for that mission has been completed.

// CurrentMission.hasMany(ActivityType, {
//   through: {
//     model: CurrentMissionActivities,
//     unique: false
//   },
//     // Define an alias for when data is retrieved
//   as: 'current_activities'
// });

// ActivityType.hasMany(CurrentMission, {
//  through: {
//   model: CurrentMissionActivities,
//   unique: false
//  },
//    // Define an alias for when data is retrieved
//  as: 'activities_for_missions'
// });

//
// We package our models and export them as an object so we can import them together and use their proper names
// export{ ExploreLevel, CurrentMission, MissionType, ActivityType, ActivityArchive, CurrentMissionActivities };

export { User };
