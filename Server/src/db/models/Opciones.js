const { DataTypes } = require("sequelize");

const Opciones = (sequelize) => {
  sequelize.define(
    "opciones",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = Opciones;
