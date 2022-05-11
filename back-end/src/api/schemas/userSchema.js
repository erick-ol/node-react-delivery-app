const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required().min(12),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  role: Joi.string(),
});
