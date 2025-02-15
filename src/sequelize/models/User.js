const { unique } = require("next/dist/build/utils");
const { DataTypes } = require("sequelize");
const UserProfile = require("./UserProfile");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define the association with UserProfile
  User.hasOne(UserProfile, {
    foreignKey: "userId", // This is the foreign key in UserProfile
    as: "profile", // This is the alias for the association
  });

  return User;
};
