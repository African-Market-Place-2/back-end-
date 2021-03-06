const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//route to endpoint routers
const configureRoutes = require("../config/routes.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

configureRoutes(server);

server.get("/", (req, res) => {
  res.send("The African Marketplace API is working ");
});

module.exports = server;
