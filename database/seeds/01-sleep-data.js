exports.seed = function (knex) {
  return knex('sleepData').insert([
    {
      userId: '1',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '1',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '1',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Katie'
    },
    {
      userId: '2',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Hector'
    },
    {
      userId: '4',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Taran'
    },
    {
      userId: '4',
      dateTimeFrom: '10/22/2019 10:00pm',
      dateTimeTo: '10/21/2019 10:00am',
      feels: '😃',
      notes: 'Slept Great -Taran'
    }
  ]);
};
