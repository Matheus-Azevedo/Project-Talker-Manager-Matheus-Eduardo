// Constants
const BAD_REQUEST_STATUS = 400;

const loginExistsValidation = (request, response, next) => {
  const { email, password } = request.body;
  if (!email) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

module.exports = loginExistsValidation;