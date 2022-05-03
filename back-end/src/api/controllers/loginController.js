const { findByEmail } = require('../services/loginService');
// const router = require('express').Router();
const rescue = require('express-rescue');

const login = ('/', rescue(async (req, res) => {
  const { email } = req.body;
  const user = await findByEmail(email);
  return res.status(200).json(user);
}));

module.exports = {
  login, 
};