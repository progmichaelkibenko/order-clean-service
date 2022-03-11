const mongoose = require("mongoose");
const connect = () => {
  const db_conn = "";
  mongoose.connect(db_conn);

  const db = mongoose.connection;

  db.on(
    "error",
    console.error.bind(console, "Connection to mongo has failed.")
  );
  db.once("open", () => {
    console.log("Succesfully connected to mongo db cluster");
  });
};

module.exports = {
  connect,
};
