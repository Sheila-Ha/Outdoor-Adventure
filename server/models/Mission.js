import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Mission extends Model {}

Mission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    missionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    missionDescription: {
      type: DataTypes.STRING,
    },
    missionImage: {
      type: DataTypes.STRING,
    },
    // This column will store a reference of the `id` of the `CurrentMission` that "owns" this Category
    activityType: {
        type: DataTypes.INTEGER,
        references: {
          model: 'missionActivity',
          key: 'id',
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mission',
  }
);

export default Mission;
