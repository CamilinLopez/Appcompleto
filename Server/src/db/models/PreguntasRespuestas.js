const { DataTypes } = require("sequelize");

const Preguntasrespuestas = (sequelize) => {
  sequelize.define(
    "preguntasrespuestas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pregunta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      respuesta: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha_creado: {
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

module.exports = Preguntasrespuestas;
