const server = require("./app");
const { database } = require("./db/index");
require("dotenv").config();

const initializeDatabase = async () => {
  try {
    await database.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    await database.sync({ force: true });
    console.log(`Connected to ${database.getDatabaseName()} database`);

    server.listen(process.env.SERVER_PORT, () => {
      console.log(`listening on port ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.log("Unable to connect to the database:", error.message);
  }
};

initializeDatabase();
