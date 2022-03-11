const { Response, ResponseError } = require("../common");

const ErrorHandler = (err, req, res, next) => {
  const error = new ResponseError({
    statusCode: err.statusCode || 500,
    msg: err.msg || "Our highly trained monkey robots broke something",
    cause: err.cause,
    url: req.originalUrl,
    ip: req.ip,
  });

  const response = new Response({ ok: false, error });
  res.status(error.statusCode);
  res.json(response);
  next();
};

module.exports.ErrorHandler = ErrorHandler;
