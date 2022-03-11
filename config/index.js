const useCases = require("../src/useCases");
const controllers = require("../src/controllers");
const repositories = require("../src/repositories/mongo");
const db = require("../src/frameworks/db/mongo");

module.exports = { useCases, controllers, repositories, db };
