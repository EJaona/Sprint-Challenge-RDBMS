const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

module.exports = server;
