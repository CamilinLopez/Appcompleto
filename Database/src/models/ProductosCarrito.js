const { DataTypes } = require("sequelize");

const ProductosCarrito = (sequelize) => {
  sequelize.define(
    "productocarritos",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = ProductosCarrito;
