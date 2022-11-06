// Constants
const UNAUTHORIZED_STATUS = 401;

const checkingAuthorization = (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return response.status(UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = {
  checkingAuthorization,
};