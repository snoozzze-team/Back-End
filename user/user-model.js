const db = require('../database/dbConfig.js');

module.exports = {
    getUsers,
    getUserById,
    getUserBy,
    getUserSleepData,
    addUserSleepData,
    addUser
}

function getUsers() {
    return db('users');
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

function getUserBy(filter) {
    return db('users')
        .where(filter)
        .first();
}

function getUserSleepData(id) {
    return db('sleepData as s')
        .join('users as u', 'u.id', 's.userId')
        .select('s.id', 's.userId', 's.dateTimeFrom', 's.dateTimeTo', 's.feels', 's.notes')
        .where({userId: id})
        .orderBy('s.id');
}

function addUserSleepData(data) {
    return db('sleepData')
        .insert(data);
}

async function addUser(user) {
    const id = await db('users')
        .insert(user);
    return getUserById(id);
}