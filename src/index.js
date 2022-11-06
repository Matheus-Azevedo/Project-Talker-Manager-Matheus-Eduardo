// Requires modules
const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./routes/talkerRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

// Sequence of app.use() calls
app.use(bodyParser.json());
app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

// Constants
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// Start the application on port 3000
app.listen(PORT, () => {
  console.log('Online');
});

// Route to evaluation of the project
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});