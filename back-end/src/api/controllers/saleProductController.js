const rescue = require('express-rescue');
const { create } = require('../services/saleProductService');

const saleProductController = ('/', rescue(async(req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const saleId = await create(id, quantity);

  return res.status(201).json(saleId);
}))

module.exports = {
  saleProductController,
}