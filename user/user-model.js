const db = require('../database/dbConfig.js');

module.exports = {
    getUsers,
    getUserById,
    getUserBy,
    getUserSleepData,
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
        .where({userId: id})
        .orderBy('s.id');
}

async function addUser(user) {
    const id = await db('users')
        .insert(user);
    return getUserById(id);
}