const rescue = require('express-rescue');
const { createSaleProduct } = require('../services/saleProductService');

const saleProductController = ('/', rescue(async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const saleId = await createSaleProduct(id, quantity);

  return res.status(201).json(saleId);
}));

module.exports = {
  saleProductController,
};