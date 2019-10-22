exports.seed = function (knex) {
  return knex('sleepData').insert([
    {
      userId: '1',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '1',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '1',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '2',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Hector'
    },
    {
      userId: '4',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Taran'
    },
    {
      userId: '4',
      dateTimeFrom: '2019-10-22T23:00',
      dateTimeTo: '2019-10-23T08:00',
      feels: '4',
      notes: 'Slept Great -Taran'
    }
  ]);
};
