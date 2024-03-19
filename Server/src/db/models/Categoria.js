const { DataTypes } = require("sequelize");

const Categoria = (sequelize) => {
  sequelize.define(
    "categoria",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Categoria;
