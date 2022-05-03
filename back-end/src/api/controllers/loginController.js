const { login } = require('../services/loginService');
const rescue = require('express-rescue');
const loginSchema = require('../schemas/loginSchema');

const validateLoginSchema = (body) => {
  const { error } = loginSchema.validate(body);

  if (error) {
      throw error;
  }
};

const loginController = ('/', rescue(async (req, res) => {
  validateLoginSchema(req.body);

  const { email, password } = req.body;
  
  const token = await login(email, password);

  return res.status(200).json(token);
}));

module.exports = {
  loginController, 
};