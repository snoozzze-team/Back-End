const router = require('express').Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js/index.js');

const validateUserData = require('../middleware/validate-user-data-middleware.js');

const secrets = require('../config/secrets.js');

router.post('/register', validateUserData, (req, res) => {

})

router.post('/login', (req, res) => {
    
})

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    }
    return jwt.sign(payload, secrets.jwtSecret);
};

module.exports = router;