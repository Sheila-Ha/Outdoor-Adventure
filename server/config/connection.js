import dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";

// create connection to our database, pass in your MySQL information for username and password
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // added for self-signed certificates
      },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.HOST,
      dialect: "postgres",
    }
  );
}

export default sequelize;
