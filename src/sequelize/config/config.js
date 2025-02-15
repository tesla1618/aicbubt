const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2"); // Ensure this is required

const sequelize = new Sequelize(
  process.env.DB_NAME || "aic_bubt",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    dialectModule: mysql2, // Ensure it's used properly
    logging: false,
  }
);

module.exports = sequelize;

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL database."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });

module.exports = sequelize;
