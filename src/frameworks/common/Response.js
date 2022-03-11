const Response = class Response {
  constructor({ ok = false, error = null, content = null }) {
    this.ok = ok;
    this.error = error;
    this.content = content;
  }
};

const ResponseError = class ResponseError {
  constructor({
    statusCode = 500,
    msg = null,
    cause = null,
    url = null,
    ip = null,
    validationErrors = [],
  }) {
    this.statusCode = statusCode;
    this.msg = msg;
    this.cause = cause;
    this.url = url;
    this.ip = ip;
    this.validationErrors = validationErrors;
  }
};

const ValidationErorr = class ValidationErorr {
  constructor({ status = null, field = null, msg = null }) {
    this.status = status;
    this.field = field;
    this.msg = msg;
  }
};

module.exports = { Response, ResponseError, ValidationErorr };
