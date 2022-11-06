// Require modules
const express = require('express');
const { readTalkerFile, writeTalkerFile } = require('../utils/talker');
const { checkingAuthorization } = require('../middlewares/checkingAuthorization');
const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const { talkValidation, watchedAtValidation,
        rateValidation } = require('../middlewares/talkValidation');

const router = express.Router();

// Constants
const HTTP_OK_STATUS = 200;
const CREATED_STATUS = 201;

// GET /talker
router.get('/', async (_request, response) => {
  const talkers = await readTalkerFile();
  return response.status(HTTP_OK_STATUS).json(talkers);
});

// GET /talker/:id
router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();
  const talker = talkers.find((t) => t.id === Number(id));
  if (!talker) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return response.status(HTTP_OK_STATUS).json(talker);
});

// Checking if the request has the authorization header for the next routes
router.use(checkingAuthorization);

// POST /talker
router.post('/', nameValidation, ageValidation, talkValidation,
watchedAtValidation, rateValidation, async (request, response) => {
  const newTalker = request.body;
  const talker = await writeTalkerFile(newTalker);
  response.status(CREATED_STATUS).json(talker);
});

module.exports = router;