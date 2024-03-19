const { Sequelize } = require("sequelize");
const {
  modelCarritos,
  modelProductos,
  modelProductosCarrito,
  modelUsers,
  modelCategoria,
  modelOpciones,
  modelPreguntasRtas,
  modelImagenProductos,
  modelLicencias,
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
modelOpciones(database);
modelCategoria(database);
modelPreguntasRtas(database);
modelImagenProductos(database);
modelLicencias(database);

const {
  carritos,
  productos,
  productocarritos,
  users,
  categoria,
  opciones,
  preguntasrespuestas,
  imagenesproductos,
  licencia,
} = database.models;

users.hasMany(carritos, { foreignKey: "userid" });
carritos.belongsTo(users, { foreignKey: "userid" });

carritos.hasMany(productocarritos, { foreignKey: "carritoid" });
productocarritos.belongsTo(carritos, { foreignKey: "carritoid" });

productos.hasMany(productocarritos, { foreignKey: "productoid" });
productocarritos.belongsTo(productos, { foreignKey: "productoid" });

categoria.hasMany(productos, { foreignKey: "categoriaid" });
productos.belongsTo(categoria, { foreignKey: "categoriaid" });

opciones.hasMany(productos, { foreignKey: "opcionid" });
productos.belongsTo(opciones, { foreignKey: "opcionid" });

productos.hasMany(preguntasrespuestas, { foreignKey: "productoid" });
preguntasrespuestas.belongsTo(productos, { foreignKey: "productoid" });

users.hasMany(preguntasrespuestas, { foreignKey: "userid" });
preguntasrespuestas.belongsTo(users, { foreignKey: "userid" });

productos.hasMany(imagenesproductos, { foreignKey: "productoid" });
imagenesproductos.belongsTo(productos, { foreignKey: "productoid" });

productos.hasMany(licencia, { foreignKey: "productoid" });
licencia.belongsTo(productos, { foreignKey: "productoid" });

module.exports = {
  ...database.models,
  database,
};
