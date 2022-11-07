// Constants
const UNAUTHORIZED_STATUS = 401;

const checkingAuthorization = (request, response, next) => {
  const { authorization } = request.headers;
  const authorizationExists = authorization === undefined;
  if (authorizationExists) {
    return response.status(UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  }
  const authorizationNotHaveLength = authorization.length !== 16;
  const authorizationNotString = typeof authorization !== 'string';
  if (authorizationNotHaveLength || authorizationNotString) {
    return response.status(UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = {
  checkingAuthorization,
};