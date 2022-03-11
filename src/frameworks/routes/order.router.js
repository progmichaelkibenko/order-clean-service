const express = require("express");

const orderRouter = (dependencies) => {
  const {
    controllers: { addOrderController },
  } = dependencies;

  const router = express.Router();

  router.route("/").post(addOrderController(dependencies));

  return router;
};

module.exports = orderRouter;
