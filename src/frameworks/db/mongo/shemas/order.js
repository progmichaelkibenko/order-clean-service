const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const orderSchema = new Schema({
  id: ObjectId,
  name: String,
  payment: Number,
  productsIds: Array(ObjectId),
  shipment: String,
});

module.exports = {
  orderSchema,
};
