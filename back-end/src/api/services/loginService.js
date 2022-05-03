const { user } = require('../../database/models');
const { sign } = require('../utils/jwt');

const USER_ALREADY_EXISTS_ERROR = new Error();
USER_ALREADY_EXISTS_ERROR.code = 'AlreadyExists';
USER_ALREADY_EXISTS_ERROR.message = 'User already registered';

const AUTHORIZATION_ERROR = new Error();
AUTHORIZATION_ERROR.code = 'Unauthorized';
AUTHORIZATION_ERROR.message = 'Invalid fields';

const USER_NOT_FOUND_ERROR = new Error();
USER_NOT_FOUND_ERROR.code = 'NotFound';
USER_NOT_FOUND_ERROR.message = 'User does not exist';

const findByEmail = async (email) => {
  const data = await user.findOne({
    where: { email },
  });

  return data;
}

const login = async (email, password) => {
  const user = await findByEmail(email);
  
  if (!user || password !== user.password) {
      throw AUTHORIZATION_ERROR;
  }
  
  const token = sign({ email });
  
  return token;
};

module.exports = {
  findByEmail,
  login,
}