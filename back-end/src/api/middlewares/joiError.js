const Joi = require('joi');

module.exports = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    return res.status(400).json({ message: err.message });
  }

  const mapError = {
    categoriesId: 400,
  };

  const status = mapError[err.code] || 500;
  return res.status(status).json({ message: err.message });
};
