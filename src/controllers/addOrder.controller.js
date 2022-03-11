const { Response } = require("../frameworks/common/Response");
const addOrderController = (dependencies) => {
  const {
    useCases: { addOrderUseCase },
  } = dependencies;

  const addOrder = addOrderUseCase(dependencies);

  return async (req, res, next) => {
    try {
      const { order } = req.body;

      const result = await addOrder.execute({ order });
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = addOrderController;
