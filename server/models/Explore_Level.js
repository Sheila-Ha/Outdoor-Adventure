import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Explore_Level extends Model {}

Explore_Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    pointsRequired: {
      type: DataTypes.INTEGER,
    },
    badge: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "explore_level",
  }
);

export { Explore_Level };
