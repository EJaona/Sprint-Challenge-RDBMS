const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const config = require("./knexfile");

const db = knex(config.development);

const server = express();
server.use(express.json());
server.use(helmet());

module.exports = server;
