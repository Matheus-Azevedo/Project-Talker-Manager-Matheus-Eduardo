// Require modules
const express = require('express');
const { checkingAuthorization } = require('../middlewares/checkingAuthorization');
const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const idValidation = require('../middlewares/idValidation');
const searchValidation = require('../middlewares/searchValidation');
const { readTalkerFile, writeTalkerFile,
        updateTalkerFile, deleteTalkerFile } = require('../utils/talker');
const { talkValidation, watchedAtValidation,
        rateValidation } = require('../middlewares/talkValidation');

const router = express.Router();

// Constants
const HTTP_OK_STATUS = 200;
const CREATED_STATUS = 201;
const NO_CONTENT_STATUS = 204;

// GET /talker/search?q=searchTerm
router.get('/search', checkingAuthorization, searchValidation, async (request, response) => {
  const { q: query } = request.query;
  const talkers = await readTalkerFile();
  const talkersFiltered = talkers.filter((t) => t.name.includes(query));
  return response.status(HTTP_OK_STATUS).json(talkersFiltered);
});

// GET /talker
router.get('/', async (_request, response) => {
  const talkers = await readTalkerFile();
  return response.status(HTTP_OK_STATUS).json(talkers);
});

// GET /talker/:id
router.get('/:id', idValidation, async (request, response) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();
  const talker = talkers.find((t) => t.id === Number(id));
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

// // PUT /talker/:id
router.put('/:id', idValidation, nameValidation, ageValidation, talkValidation,
watchedAtValidation, rateValidation, async (request, response) => {
  const { id } = request.params;
  const newTalker = request.body;
  const talker = { id: Number(id), ...newTalker };
  await updateTalkerFile(talker);
  return response.status(HTTP_OK_STATUS).json(talker);
});

// DELETE /talker/:id
router.delete('/:id', idValidation, async (request, response) => {
  const { id } = request.params;
  await deleteTalkerFile(id);
  return response.status(NO_CONTENT_STATUS).json();
});

module.exports = router;