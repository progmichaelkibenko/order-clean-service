const mongoose = require("mongoose");

const EntityName = "Order";

const {orderSchema} = require("../../frameworks/db/mongo/shemas/order");

module.exports = {
  add: async (order) => {
    const Order = mongoose.model(EntityName, orderSchema);
    const mongoResponse = new Order(order);
    return mongoResponse.save();
  },
};
