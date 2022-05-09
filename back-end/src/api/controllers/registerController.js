const rescue = require('express-rescue');
// const md5 = require('md5');
const { newCostumer } = require('../services/customerService');
const validateSchemas = require('../utils/validateSchemas');
const userSchema = require('../schemas/userSchema');

const registerUser = ('/', rescue(async (req, res) => {
    validateSchemas(userSchema, req.body);
  
    const token = await newCostumer(req.body);
  
    return res.status(201).json(token);
}));

module.exports = {
  registerUser, 
};