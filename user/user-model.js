const db = require('../database/dbConfig.js');

module.exports = {
    getUsers,
    getUserById,
    getUserBy,
    addUser,
    updateUser,
    getUserSleepData,
    getUserSleepDataById,
    addUserSleepData,
    deleteUserSleepData,
    updateUserSleepData
}

function getUsers() {
    return db('users');
}

function getUserById(id) {
    return db('users')
        .select('id', 'email', 'username')
        .where({ id })
        .first();
}

function getUserBy(filter) {
    return db('users')
        .where(filter)
        .first();
}

async function addUser(user) {
    const id = await db('users')
        .insert(user);
    return getUserById(id);
}

function updateUser(id, changes) {
    return db('users')
        .update(changes)
        .where({ id })
}

function getUserSleepData(id) {
    return db('sleepData as s')
        .join('users as u', 'u.id', 's.userId')
        .select('s.id', 's.userId', 's.dateTimeFrom', 's.dateTimeTo', 's.feels', 's.notes')
        .where({ userId: id })
        .orderBy('s.id');
}

function getUserSleepDataById(id) {
    return db('sleepData')
        .where({ id })
        .first();
}

function addUserSleepData(data) {
    return db('sleepData')
        .insert(data);
}

function deleteUserSleepData(id) {
    return db('sleepData')
        .del()
        .where({ id })
}

function updateUserSleepData(id, changes) {
    return db('sleepData')
        .update(changes)
        .where({ id })
}