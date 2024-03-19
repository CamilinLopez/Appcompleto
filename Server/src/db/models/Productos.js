const { DataTypes } = require("sequelize");

const Productos = (sequelize) => {
  sequelize.define(
    "productos",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
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
      free: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      videourl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      planes_caracteristicas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha_agregado: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Productos;
