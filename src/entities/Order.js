class Order {
  constructor({
    id = null,
    name = null,
    payment = 0,
    productsIds = [],
    shipment = null,
  }) {
    this.id = id;
    this.name = name;
    this.payment = payment;
    this.productsIds = productsIds;
    this.shipment = shipment;
  }
}

module.exports.Order = Order;
