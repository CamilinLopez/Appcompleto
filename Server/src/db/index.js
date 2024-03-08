const { Sequelize } = require("sequelize");
const {
  modelCarritos,
  modelProductos,
  modelProductosCarrito,
  modelUsers,
} = require("./models");
require("dotenv").config();

const database = new Sequelize(process.env.INTERNAL_DATABASE_URL, {
  logging: false,
  native: false,
});

modelCarritos(database);
modelProductos(database);
modelProductosCarrito(database);
modelUsers(database);

const { carritos, productos, productocarritos, users } = database.models;

users.hasMany(carritos, { foreignKey: "userid" });
carritos.belongsTo(users, { foreignKey: "userid" });

carritos.hasMany(productocarritos, { foreignKey: "carritoid" });
productocarritos.belongsTo(carritos, { foreignKey: "carritoid" });

productos.hasMany(productocarritos, { foreignKey: "productoid" });
productocarritos.belongsTo(productos, { foreignKey: "productoid" });

module.exports = {
  ...database.models,
  database,
};
