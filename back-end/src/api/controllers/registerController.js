const rescue = require('express-rescue');
const { create } = require('../services/customerService');
const { findByEmail } = require('../services/loginService');
const validateSchemas = require('../utils/validateSchemas');
const userSchema = require('../schemas/userSchema');

const registerUser = ('/', rescue(async (req, res) => {
  validateSchemas(userSchema, req.body);

  const { name, email, password } = req.body;
  
  const token = await create(name, email, password);

  const findUser = await findByEmail(email);
  findUser.dataValues.email === email || findUser.dataValues.name === name 
    ? res.status(409).json( { message:'User already registered' })
    : res.status(201).json({ token });

}));

module.exports = {
  registerUser, 
};