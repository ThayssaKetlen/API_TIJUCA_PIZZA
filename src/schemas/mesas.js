const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const mesas = sequelize.define(
  "mesas",
  {
    idMesa: {
      primaryKey: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    statusMesa: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = mesas;