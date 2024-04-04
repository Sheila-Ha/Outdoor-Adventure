const User = require('./User');
const ExploreLevel = require('./ExploreLevel');

// Define a User as having one ExploreLevel to create a foreign key in the `ExploreLevel` table
User.hasOne(ExploreLevel, {
  foreignKey: 'userId',
  // When we delete a User, make sure to also delete the associated ExploreLevel.
  onDelete: 'CASCADE',
});

// We can also define the association starting with ExploreLevel
ExploreLevel.belongsTo(User, {
  foreignKey: 'userId',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { User, ExploreLevel };
