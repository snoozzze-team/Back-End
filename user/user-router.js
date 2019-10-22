const router = require('express').Router();

const Users = require('./user-model.js');

router.get('/', (req, res) => {
    Users.getUsers()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;