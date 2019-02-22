const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const config = require("./knexfile");

const db = knex(config.development);

const server = express();
server.use(express.json());
server.use(helmet());

server.get("/projects", async (req, res) => {
  try {
    const projects = await db("projects");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = server;
