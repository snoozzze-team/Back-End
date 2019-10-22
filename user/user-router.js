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

router.get('/sleepdata', (req, res) => {
    const token = req.headers.authorization;
    const userId = token.payload.id;
    Users.getUserSleepData(userId)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;