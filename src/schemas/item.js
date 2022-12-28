const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const items = sequelize.define(
  "items",
  {
    idItem: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idPedido: {
      foreignKey: true, 
      type: DataTypes.INTEGER,
    },
    idProduto: {
      foreignKey: true,
      type: DataTypes.STRING,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    totalItem: {
      type: DataTypes.FLOAT,
    },
    observacao: {
      type:DataTypes.TEXT,
    }
  },
  { timestamps: false }
);

module.exports = items;
