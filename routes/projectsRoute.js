const server = require("express").Router();
const projectDb = require("../data/helpers/projectModels");

server.post("/", async (req, res) => {
  try {
    const addProject = await projectDb.insert(req.body);
    res.status(201).json(addProject);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

server.get("/:id", async (req, res) => {
  try {
    const getProject = await projectDb.getById(req.params.id);
    if (!getProject) {
      res.status(400).json({ msg: "id does not exist" });
    } else {
      res.json(getProject);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = server;
