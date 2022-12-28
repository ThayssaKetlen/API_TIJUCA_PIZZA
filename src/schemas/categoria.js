const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const categoria = sequelize.define(
  "categoria",
  {
    idCategoria: {
      primaryKey: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    nomeCategoria: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = categoria;
