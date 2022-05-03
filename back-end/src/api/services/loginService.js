const md5 = require('md5');
const { user } = require('../../database/models');
const { sign } = require('../utils/jwt');

const AUTHORIZATION_ERROR = new Error();
AUTHORIZATION_ERROR.code = 'Unauthorized';
AUTHORIZATION_ERROR.message = 'Wrong email or password';

const USER_NOT_FOUND_ERROR = new Error();
USER_NOT_FOUND_ERROR.code = 'NotFound';
USER_NOT_FOUND_ERROR.message = 'User does not exist';

const findByEmail = async (email) => {
  const data = await user.findOne({
    where: { email },
  });

  return data;
};

const login = async (email, password) => {
  const getEmail = await findByEmail(email);

  if (!getEmail) {
    throw USER_NOT_FOUND_ERROR;
  }
  
  const cryptedPassword = md5(password);
  
  if (cryptedPassword !== user.password) {
      throw AUTHORIZATION_ERROR;
  }
  
  const token = sign({ email });
  
  return token;
};

module.exports = {
  findByEmail,
  login,
};