const express = require("express");
const knex = require("knex");
const config = require("./knexfile");

const db = knex(config.development);

const server = express();

module.exports = server;
