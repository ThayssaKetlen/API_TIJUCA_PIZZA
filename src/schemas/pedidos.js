const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/configDataBase");

const pedidos = sequelize.define(
  "pedidos",
  {
    idPedido: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    idUser: {
      type: DataTypes.INTEGER,
    },
    idMesa: {
      type: DataTypes.INTEGER,
    },
    statusPedidos: {
      type: DataTypes.INTEGER,
    },
    data: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    totalPedido: {
      defaultValue: 0,
      type: DataTypes.FLOAT, 
    }
  },
  { timestamps: false },
);  

module.exports = pedidos;
