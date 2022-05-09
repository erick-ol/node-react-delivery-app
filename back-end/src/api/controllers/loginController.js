const rescue = require('express-rescue');
const { login } = require('../services/loginService');
const validateSchemas = require('../utils/validateSchemas');
const loginSchema = require('../schemas/loginSchema');

const loginController = ('/', rescue(async (req, res) => {
  validateSchemas(loginSchema, req.body);

  const { email, password } = req.body;

  const token = await login(email, password);

  return res.status(200).json({ token });
}));

module.exports = {
  loginController, 
};