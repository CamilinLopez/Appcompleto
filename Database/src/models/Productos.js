const { DataTypes } = require("sequelize");

const Productos = (sequelize) => {
  sequelize.define("productos", {
    id: {
      type: DataTypes.STRING,
      primarykey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precio: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0,
    },
  });
};

module.exports = Productos;
