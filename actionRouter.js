const express = require("express");
const db = require("./db");
const actionRouter = express.Router();

actionRouter.get("/", async (req, res) => {
  try {
    const actions = await db("actions");
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

actionRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db("actions")
      .where({ id: id })
      .first();
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});
actionRouter.post("/", async (req, res) => {
  const action = req.body;
  try {
    const posted = await db("actions").insert(action);
    res.status(200).json(posted);
  } catch (error) {
    res.status(500).json(error);
  }
});
actionRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db("actions")
      .where({ id: id })
      .first();
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = actionRouter;
