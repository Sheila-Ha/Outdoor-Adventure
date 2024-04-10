const User = require('./User');
const ExploreLevel = require('./ExploreLevel');
const CurrentMission = require('./CurrentMission');
const Category = require('./Category');
const Activity = require('./Activity');

// User connection to ExploreLevel
ExploreLevel.hasMany(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

User.belongsTo(ExploreLevel, {
  foreignKey: 'id',
});

// User connection to CurrentMission
CurrentMission.hasMany(User, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

User.belongsTo(CurrentMission, {
  foreignKey: 'id',
});

// one to one CurrentMission has one Category
CurrentMission.hasOne(Category, {
  foreignKey: 'currentMissionId',
  onDelete: 'CASCADE',
});

Category.belongsTo(CurrentMission, {
  foreignKey: 'currentMissionId',
});

// one to many CurrentMission has many Activity
CurrentMission.hasMany(Activity, {
  foreignKey: 'currentMissionId',
  onDelete: 'CASCADE',
  });

  Activity.belongsTo(CurrentMission, {
    foreignKey: 'currentMissionId',
  });

// We package our models and export them as an object so we can import them together and use their proper names
module.exports = { User, ExploreLevel, CurrentMission, Category, Activity };
