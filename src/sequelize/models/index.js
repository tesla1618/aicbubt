const { Sequelize } = require("sequelize");
const User = require("./User");
const UserProfile = require("./UserProfile");
const sequelize = require("../config/config");

const UserModel = User(sequelize);
const UserProfileModel = UserProfile(sequelize);

const db = {
  sequelize,
  Sequelize,
  UserModel,
  UserProfileModel,
};

sequelize
  .sync({ alter: true }) // `alter: true` updates the schema without dropping tables
  .then(() => console.log("Database synchronized."))
  .catch((err) => console.error("Error syncing database:", err));

module.exports = db;
