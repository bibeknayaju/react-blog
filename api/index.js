const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("CONNECTE HAI TA");
  })
  .catch((error) => {
    console.log("ERROR in connection", error);
  });

const app = express();

app.listen(4000, () => {
  console.log("SERVER RUNNING ON 4000!");
});
