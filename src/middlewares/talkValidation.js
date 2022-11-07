// Constants
const BAD_REQUEST_STATUS = 400;

const talkValidation = (request, response, next) => {
  const { talk } = request.body;
  if (!talk) {
    return response.status(BAD_REQUEST_STATUS).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const watchedAtValidation = (request, response, next) => {
  const { talk: { watchedAt } } = request.body;
  if (!watchedAt) {
    return response.status(BAD_REQUEST_STATUS)
    .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/([12][0-9]{3})$/i;
  if (!dateRegex.test(watchedAt)) {
    return response.status(BAD_REQUEST_STATUS)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const rateValidation = (request, response, next) => {
  const { talk: { rate } } = request.body;
  console.log(rate);
  if (rate === undefined) {
    return response.status(BAD_REQUEST_STATUS).json({ message: 'O campo "rate" é obrigatório' });
  }
  const rateRegex = /^[1-5]$/i;
  if (!rateRegex.test(rate)) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = { talkValidation, watchedAtValidation, rateValidation };