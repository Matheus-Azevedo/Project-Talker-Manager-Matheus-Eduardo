// Constants
const BAD_REQUEST_STATUS = 400;

const ageValidation = (request, response, next) => {
  const { age } = request.body;
  const ageExists = age === undefined;
  if (ageExists) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = ageValidation;