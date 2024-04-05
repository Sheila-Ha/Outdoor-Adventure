const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CurrentMission extends Model {}

CurrentMission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    timer: {
      type: DataTypes.INTEGER,
    },
    // This column will store a reference of the `id` of the `User` that has this ExploreLevel
    userId: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `user` model, which we set in `User.js` as its `modelName` property
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "currentMission",
  }
);

module.exports = CurrentMission;
