const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  sequelize.define(
    "users",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      ultima_conexion: {
        type: DataTypes.DATE,
      },
      autentificacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = User;
