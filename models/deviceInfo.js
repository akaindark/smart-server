const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const DeviceInfo = sequelize.define("deviceInfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

module.exports = DeviceInfo;
