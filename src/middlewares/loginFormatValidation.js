// Constants
const BAD_REQUEST_STATUS = 400;

const loginFormatValidation = (request, response, next) => {
  const { email, password } = request.body;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (regexEmail.test(email) === false) {
    return response.status(BAD_REQUEST_STATUS)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  const regexPassword = /^[a-z0-9]{6,}$/i;
  if (regexPassword.test(password) === false) {
    return response.status(BAD_REQUEST_STATUS)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = loginFormatValidation;