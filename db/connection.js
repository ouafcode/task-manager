const mongoose = require("mongoose");

const db = () => {
  mongoose.connect(process.env.MONGO_URL).then((con) => {
    console.log(`Databse connected on ${con.connection.host}`);
  });
};

module.exports = db;
