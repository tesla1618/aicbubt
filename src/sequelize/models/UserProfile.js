const { DataTypes } = require("sequelize");
const User = require("./User");

module.exports = (sequelize) => {
  const UserProfile = sequelize.define("UserProfile", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
  });

  UserProfile.belongsTo(User(sequelize), { foreignKey: "userId" });

  return UserProfile;
};
