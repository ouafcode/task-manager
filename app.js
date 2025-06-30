const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes/tasksRoutes");
const globalError = require("./middleware/errorMiddleware");
const db = require("./db/connection");

dotenv.config({ path: ".env" });

//Connect db
db();

const app = express();

//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", routes);

// Error handling middleware
app.use(globalError);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`App runnning on ${PORT}`);
});

//Handle rejection outside expres
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
