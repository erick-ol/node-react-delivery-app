const rescue = require('express-rescue');
const { create } = require('../services/customerService');
const validateSchemas = require('../utils/validateSchemas');
const userSchema = require('../schemas/userSchema');

const registerUser = ('/', rescue(async (req, res) => {
  validateSchemas(userSchema, req.body);

  const { name, email, password } = req.body;
  
  const token = await create(name, email, password);

  return res.status(200).json({ token });
}));

module.exports = {
  registerUser, 
};