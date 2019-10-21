const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//routers

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

//use routers

module.exports = server;