// Requires modules
const express = require('express');
const bodyParser = require('body-parser');
const { readTalkerFile } = require('./talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Start the application on port 3000
app.listen(PORT, () => {
  console.log('Online');
});

// Routes List for Talker

// ROUTE: GET /talker
app.get('/talker', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(HTTP_OK_STATUS).json(talkers);
});
