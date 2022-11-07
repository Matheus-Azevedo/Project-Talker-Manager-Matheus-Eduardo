// Require modules
const { readTalkerFile } = require('../utils/talker');

// Constants
const HTTP_OK_STATUS = 200;

const searchValidation = async (request, response, next) => {
  const { q: query } = request.query;
  const talkers = await readTalkerFile();
  const queryIsUndefined = query === undefined;
  if (queryIsUndefined) {
    return response.status(HTTP_OK_STATUS).json(talkers);
  }
  const filteredTalkers = talkers.filter((t) => t.name.includes(query));
  const notFindTalker = filteredTalkers.length === 0;
  if (notFindTalker) {
    return response.status(HTTP_OK_STATUS).json([]);
  }
  next();
};

module.exports = searchValidation;