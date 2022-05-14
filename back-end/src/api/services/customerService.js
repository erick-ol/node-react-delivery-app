const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../../database/models');
const { sign } = require('../utils/jwt');

const USER_ALREADY_EXISTS_ERROR = new Error();
USER_ALREADY_EXISTS_ERROR.code = 'AlreadyExists';
USER_ALREADY_EXISTS_ERROR.message = 'User already registered';

const newCostumer = async (bodyRequest) => {
  const { name, email, password, role } = bodyRequest;

  const encryptedPassword = md5(password);

  const [userRegistered, created] = await user.findOrCreate({
    where: { [Op.or]: [{ name }, { email }] },
    defaults: { name, email, password: encryptedPassword, role },
  });

  if (!created) {
    throw USER_ALREADY_EXISTS_ERROR;
  }

  const token = sign({ name, email, password });

  return {
    name: userRegistered.name,
    email: userRegistered.email,
    role: userRegistered.role,
    token,
  };
};

module.exports = {
  newCostumer,
};

// findOrCreate function:
// https://sebhastian.com/sequelize-findorcreate/