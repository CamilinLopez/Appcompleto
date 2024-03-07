const { Sequelize } = require("sequelize");
const { Carritos, Productos, ProductosCarrito, Users } = require("./models");
require("dotenv").config();

const database = new Sequelize(process.env.INTERNAL_DATABASE_URL, {
  logging: false,
  native: false,
});

const initializeDatabase = async () => {
  try {
    await database.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    Carritos(database);
    Productos(database);
    ProductosCarrito(database);
    Users(database);

    await database.sync({ force: false });
    console.log(`Connected to ${database.getDatabaseName()} database`);
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

await initializeDatabase();

module.exports = {
  ...database.models,
  database,
};
