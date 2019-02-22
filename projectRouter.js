const express = require("express");
const db = require("./db");
const projectRouter = express.Router();

projectRouter.get("/", async (req, res) => {
  try {
    const projects = await db("projects");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

projectRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const projects = await db("projects")
      .where({ id: id })
      .first();
    const actions = await db("actions").where({ projectId: id });
    res.status(200).json({
      ...projects,
      completed: false,
      actions: actions
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

projectRouter.post("/", async (req, res) => {
  const project = req.body;
  try {
    const posted = await db("projects").insert(project);
    res.status(200).json(posted);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = projectRouter;
