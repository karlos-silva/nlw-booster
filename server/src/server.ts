import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Karlos',
    'Lucas',
    'Bernardo',
    'Daniel'
  ]);
});

app.listen(3333);