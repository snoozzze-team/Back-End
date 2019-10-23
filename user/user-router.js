const router = require('express').Router();

const Users = require('./user-model.js');
const moment = require('moment');

const validateSleepData = require('../middleware/validate-sleep-data.js');

//User

router.get('/', (req, res) => {
    Users.getUsers()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     Users.getUserById(id)
//     .then(user => {
//         if (user) {
//             res.status(200).json(user);
//         } else {
//             res.status(404).json(user);
//         }
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     })
// });

// router.put('/:id', (req, res) => {
//     const changes = req.body;
//     const {id} = req.params;
//     Users.updateUser(id, changes)
//     .then(user => {
//         if (user) {
//             res.status(200).json({user});
//         } else {
//             res.status(404).json(user);
//         }
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     })
// });

//Sleep data

router.post('/sleepdata', validateSleepData, (req, res) => {
    const sleepData = req.body;
    const userId = req.user.id;
    sleepData.userId = userId;
    Users.addUserSleepData(sleepData)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/sleepdata', (req, res) => {
    const userId = req.user.id;
    Users.getUserSleepData(userId)
    .then(data => {
        data.map(obj => {
            const tempDateTimeFrom = obj.dateTimeFrom;
            const tempDateTimeTo = obj.dateTimeTo;
            const from = tempDateTimeFrom.slice('T:');
            const to = tempDateTimeTo.slice('T:');
            const dateTimeFrom = moment(from).format('lll');
            const dateTimeTo = moment(to).format('lll');
            obj.dateTimeFrom = dateTimeFrom;
            obj.dateTimeTo = dateTimeTo;
        })
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/sleepdata/:id', (req, res) => {
    const {id} = req.params;
    Users.deleteUserSleepData(id)
    .then(data => {
        res.status(200).json({message: 'successfully deleted sleep data'});
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.put('/sleepdata/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    Users.updateUserSleepData(id, changes)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;