// Require modules
const express = require('express');
const { readTalkerFile } = require('../utils/talker');

const router = express.Router();

// Constants
const HTTP_OK_STATUS = 200;

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

module.exports = router;