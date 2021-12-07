// dotenv setup
require("dotenv").config();

// express async errors module
require("express-async-errors");

// express
const express = require("express");
const app = express();

// rest of packages
const path = require("path");
const morgan = require("morgan");

// database connection

// routers

// middleware, error middleware

// routes
app.use(morgan("tiny"));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// define the base api route

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
