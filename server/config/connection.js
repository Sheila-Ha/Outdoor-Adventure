import dotenv from 'dotenv';
dotenv.config();
import Sequelize from 'sequelize';

let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres' 
  });
  
}

export default sequelize;

