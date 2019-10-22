const moment = require('moment');
const date = moment(Date.now()).format('LL');

exports.up = function (knex) {
    return knex.schema.createTable('sleepData', data => {
        data.increments();
        data.integer('userId', 255);
        data.string('dateTimeFrom', 255);
        data.string('dateTimeTo', 255);
        data.string('feels', 255);
        data.string('notes', 255);
    });
};

exports.down = function (knex) {

};
