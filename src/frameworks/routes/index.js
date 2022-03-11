const express = require("express");
const orders = require("./order.router");

const routes = (dependencies) => {
  const routes = express.Router();

  const orderRouter = orders(dependencies);

  routes.use("/orders", orderRouter);

  return routes;
};

module.exports = routes;
