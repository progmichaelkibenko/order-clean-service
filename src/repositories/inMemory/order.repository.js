const { db: inMemoryDb } = require("../../frameworks/db/inMemory");
const { cloneDeep } = require("lodash");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  add: async (order) => {
    const _order = cloneDeep(order);
    if (!_order.id) {
      _order.id = uuidv4();
    }
    inMemoryDb.orders.push(_order);
    return _order;
  },
  update: async (order) => {
    const index = inMemoryDb.orders.findIndex((item) => item.id === order.id);
    if (index >= 0) {
      inMemoryDb.orders[index] = order;
      return inMemoryDb.orders[index];
    }
    return null;
  },
  delete: async (order) => {
    const index = inMemoryDb.orders.findIndex((item) => item.id === order.id);
    if (index >= 0) {
      inMemoryDb.orders.splice(index, 1);
      return order;
    }
    return null;
  },
  getById: async (id) => {
    return inMemoryDb.orders.find((item) => item.id === id);
  },
};
