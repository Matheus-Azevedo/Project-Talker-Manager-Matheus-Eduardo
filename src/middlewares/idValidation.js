// Require modules
const { readTalkerFile } = require('../utils/talker');

// Constants
const NOT_FOUND_STATUS = 404;

const idValidation = async (request, response, next) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();
  const talker = talkers.find((t) => t.id === Number(id));
  if (!talker) {
    return response.status(NOT_FOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = idValidation;