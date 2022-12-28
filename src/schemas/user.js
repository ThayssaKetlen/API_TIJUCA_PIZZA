const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const User = sequelize.define(
  "users",
  {
    idUser: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    nomeUser: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = User