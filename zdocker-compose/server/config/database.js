const knex = require("knex");
require("dotenv").config();

const knexfile = require("../knexfile");

const environment = process.env.DB_ENV || "development";

module.exports = knex(knexfile[environment]);