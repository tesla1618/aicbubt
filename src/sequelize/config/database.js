const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: console.log,
  }
);

const User = require("../models/User")(sequelize);
const UserProfile = require("../models/UserProfile")(sequelize);

sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
