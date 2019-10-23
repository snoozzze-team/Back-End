const db = require('../database/dbConfig.js');

module.exports = {
    getUsers,
    getUserById,
    getUserBy,
    addUser,
    updateUser,
    getUserSleepData,
    addUserSleepData,
    deleteUserSleepData,
    updateUserSleepData
}

function getUsers() {
    return db('users');
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

function getUserSleepData(id) {
    return db('sleepData as s')
        .join('users as u', 'u.id', 's.userId')
        .select('s.id', 's.userId', 's.dateTimeFrom', 's.dateTimeTo', 's.feels', 's.notes')
        .where({ userId: id })
        .orderBy('s.id');
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