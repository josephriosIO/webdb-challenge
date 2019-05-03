// bring in express
const express = require("express");
// bring in middleware helmet
const helmet = require("helmet");

const server = express();

//routes
const actionRouter = require("./routes/actionsRoute");
const projectRouter = require("./routes/projectsRoute");

//server uses
server.use(helmet());
server.use(express.json());

// send routes to use
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>webdb challenge</h>
  `);
});

module.exports = server;
