const express = require("express");
const app = express();
const router = express.Router();

const index = require("./routes/index");
const personRoute = require("./routes/personRoute");

app.use("/", index);
app.use("/persons", personRoute);

module.exports = app;