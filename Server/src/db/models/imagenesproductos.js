const { DataTypes } = require("sequelize");

const Imagenesproductos = (sequelize) => {
  sequelize.define(
    "imagenesproductos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Imagenesproductos;
