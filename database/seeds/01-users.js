exports.seed = function (knex) {
  return knex('users').insert([
    {
      email: 'Katie@email.com',
      username: 'Katie',
      password: 'pass'
    },
    {
      email: 'Hector@email.com',
      username: 'Hector',
      password: 'pass'
    },
    {
      email: 'Kevin@email.com',
      username: 'Kevin',
      password: 'pass'
    }
  ]);
};
