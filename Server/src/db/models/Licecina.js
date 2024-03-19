const { DataTypes } = require("sequelize");

const Licencias = (sequelize) => {
  sequelize.define(
    "licencia",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      caracteristicas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Licencias;
