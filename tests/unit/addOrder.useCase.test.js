const addOrderUseCase = require("../../src/useCases/addOrder.useCase");
const { v4: uuidv4 } = require("uuid");
const orderRepository = require("../../src/repositories/inMemory/order.repository");
const { isUuid } = require("uuidv4");

const Chance = require("chance");

const chance = new Chance();

describe("Add Order Use Case", () => {
  const mockDependencies = {
    repositories: {
      orderRepository: {
        add: jest.fn((props) => orderRepository.add(props)),
      },
    },
  };
  test("Order Should be added", async () => {
    const addOrder = addOrderUseCase(mockDependencies).execute;

    const mockOrder = {
      name: chance.name(),
      payment: chance.natural(),
      productsIds: [uuidv4(), uuidv4()],
      shipment: chance.address(),
    };

    const useCaseResponse = await addOrder({ order: mockOrder });

    const expectedCall =
      mockDependencies.repositories.orderRepository.add.mock.calls[0][0];

    delete expectedCall.id;
    expect(expectedCall).toEqual(mockOrder);

    expect(useCaseResponse.name).toBe(mockOrder.name);
    expect(useCaseResponse.payment).toBe(mockOrder.payment);
    expect(useCaseResponse.productsIds).toEqual(mockOrder.productsIds);
    expect(useCaseResponse.shipment).toBe(mockOrder.shipment);
    expect(useCaseResponse.id).toBeDefined();
    const isValidId = isUuid(useCaseResponse.id);
    expect(isValidId).toBe(true);
  });
});
