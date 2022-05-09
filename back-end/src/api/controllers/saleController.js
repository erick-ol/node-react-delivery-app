const rescue = require('express-rescue');
const { createSale, getSaleById } = require('../services/saleService');

const createSaleController = ('/', rescue(async (req, res) => {
  try {
    // const { id } = req.params;
    // const { quantity } = req.body;
    const saleId = await createSale(req.body);
  
    return res.status(201).json(saleId);
  } catch (error) {
    console.log(error.message);
  }
}));

const getById = ('/', rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await getSaleById(id);

  return res.status(200).json(sale);
}));

module.exports = {
  createSaleController,
  getById,
};