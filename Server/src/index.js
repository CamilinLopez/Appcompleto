const server = require("./app");
const { database } = require("./db/index");

const initializeDatabase = async () => {
  try {
    await database.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    await database.sync({ force: true });
    console.log(`Connected to ${database.getDatabaseName()} database`);

    server.listen(3000, () => {
      console.log(`listening on port ${"3000"}`);
    });
  } catch (error) {
    console.log("Unable to connect to the database:", error.message);
  }
};

initializeDatabase();
