const md5 = require('md5');
const { user } = require('../../database/models');
const { findByEmail } = require('./loginService');
const { sign } = require('../utils/jwt');

const USER_ALREADY_EXISTS_ERROR = new Error();
USER_ALREADY_EXISTS_ERROR.code = 'AlreadyExists';
USER_ALREADY_EXISTS_ERROR.message = 'User already registered';

const create = async (name, email, password) => {
  const getEmail = await findByEmail(email);

  if (getEmail) {
    throw USER_ALREADY_EXISTS_ERROR;
  }

  const cryptoPassword = md5(password);

  await user.create({
    name,
    email,
    password: cryptoPassword,
    role: 'customer',
  });
  
  const token = sign({ name, email, role: 'customer' });
    
  return token;
};

module.exports = {
  create,
};
