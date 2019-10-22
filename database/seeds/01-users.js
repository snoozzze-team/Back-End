exports.seed = function (knex) {
  return knex('users').insert([
    {
      email: 'Katie@email.com',
      password: 'pass'
    },
    {
      email: 'Hector@email.com',
      password: 'pass'
    },
    {
      email: 'Kevin@email.com',
      password: 'pass'
    }
  ]);
};
