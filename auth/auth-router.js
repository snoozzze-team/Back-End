const router = require('express').Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../user/user-model.js');

const validateUserData = require('../middleware/validate-user-data-middleware.js');

const secrets = require('../config/secrets.js');

router.post('/register', validateUserData, (req, res) => {
    const userData = req.body;
    const hash = bcrypt.hashSync(userData.password, 12);
    userData.password = hash;
    Users.addUser(userData)
    .then(user => {
        res.status(201).json({message: 'user created'});
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    Users.getUserBy({email})
    .then(user => {
        if(user && bcrypt.compare(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({message: `Welcome, ${user.username}`, token: `${token}`});
        } else {
            res.status(401).json({error: 'invalid user credentials'});
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    }
    return jwt.sign(payload, secrets.jwtSecret);
};

module.exports = router;