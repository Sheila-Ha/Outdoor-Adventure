import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Current_Mission extends Model {}

Current_Mission.init(
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
    type: {
      type: DataTypes.INTEGER,
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    timer: {
      type: DataTypes.INTEGER,
    },
    // This column will store a reference of the `id` of the `User` that has this ExploreLevel
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This references the `user` model, which we set in `User.js` as its `modelName` property
        model: "user",
        key: "id",
      },
    },
    missionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        // This references the 'mission_types' model, which we set in 'Mission_Types.js' as its modelname property
        model: "mission_types",
        //key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "current_mission",
  }
);

export { Current_Mission };
