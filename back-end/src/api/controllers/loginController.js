const { findByEmail } = require('../services/loginService');
const router = require('express').Router();
const rescue = require('express-rescue');

router.post('/', rescue(async (req, res) => {
  const { email } = req.body;
  const user = await findByEmail(email);
  return res.status(200).json(user);
}));

module.exports = router;