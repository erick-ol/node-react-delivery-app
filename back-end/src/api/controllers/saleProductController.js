const rescue = require('express-rescue');
const { createSale } = require('../services/saleService');

const saleProductController = ('/', rescue(async (req, res) => {
  try {
    // const { id } = req.params;
    // const { quantity } = req.body;
    const saleId = await createSale(req.body);
  
    return res.status(201).json(saleId);
  } catch (error) {
    console.log(error.message);
  }
}));

module.exports = {
  saleProductController,
};