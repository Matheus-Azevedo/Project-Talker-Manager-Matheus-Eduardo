// Constants
const BAD_REQUEST_STATUS = 400;

const loginExistsValidation = (request, response, next) => {
  const { email, password } = request.body;
  const emailExists = email === undefined;
  if (emailExists) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  }
  const passwordExists = password === undefined;
  if (passwordExists) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

module.exports = loginExistsValidation;