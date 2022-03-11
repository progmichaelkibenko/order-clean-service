const { Order } = require("../entities/Order");
const { upperFirst } = require("lodash");

const addOrderUseCase = (dependencies) => {
  const {
    repositories: { orderRepository },
  } = dependencies;

  const execute = async ({ order: receivedOrder }) => {
    const order = new Order(receivedOrder);

    // call repository

    //return repository result
    return orderRepository.add(order);
  };

  return { execute };
};

module.exports = addOrderUseCase;
