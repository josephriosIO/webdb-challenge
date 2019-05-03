const server = require("express").Router();
const actionDb = require("../data/helpers/actionModels");

server.post("/", async (req, res) => {
  try {
    const addAction = await actionDb.insert(req.body);
    res.status(201).json(addAction);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = server;
