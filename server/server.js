const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//middleware
const authenticate = require('../middleware/authenticate-middleware.js');

//routers
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../user/user-router.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//use routers
server.use('/api/auth', authRouter);

//set all user routes to require authentication
server.use('/api/users', authenticate, userRouter);

module.exports = server;