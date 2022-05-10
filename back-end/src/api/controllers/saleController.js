const rescue = require('express-rescue');
const { createSale, getSaleById, getSaleBySellerId, updatePreparing, updateTransit } = require('../services/saleService');

const createSaleController = ('/', rescue(async (req, res) => {
  try {
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

const getSaleBySeller = ('/', rescue(async (req, res) => {
  const { id } = req.params;

  const sellerById = await getSaleBySellerId(id);

  return res.status(200).json(sellerById);
}));

const updateSalePreparing = ('/', rescue(async (req, res) => {
  const { id } = req.params;

  const salePreparing = await updatePreparing(id);

  return res.status(201).json(salePreparing);
}))

const updateSaleTransit = ('/', rescue(async (req, res) => {
  const { id } = req.params;

  const saleDelivering = await updateTransit(id);

  return res.status(201).json(saleDelivering);
}))

module.exports = {
  createSaleController,
  getById,
  getSaleBySeller,
  updateSalePreparing,
  updateSaleTransit,
};