const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const User = db.define("user", {
  groupName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  familyUsername: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
