require("dotenv").config;

const express = require("express");

const app = express();

const PORT = process.env.PORT || 6000;

const API_PREFIX = process.env.API_PREFIX || "/api/v1";

const { ErrorHandler } = require("./frameworks/expressSpecific/ErrorHandler");

const routes = require("./frameworks/routes");

const dependencies = require("../config");

const { db } = dependencies;

const start = () => {
  // midlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes/Controllers

  app.use(API_PREFIX, routes(dependencies));

  // Error Handler
  app.use(ErrorHandler);

  app.listen(PORT, () => {
    console.log(`WOOOHHHOOO our server is runing on PORT ${PORT}`);
    db.connect();
  });
};

module.exports = { start };
