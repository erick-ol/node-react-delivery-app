const rescue = require('express-rescue');
const {
  createSale,
  getSaleById,
  getSaleBySellerId, 
  updatePreparing, 
  updateTransit, 
  updateDelivered,
  update,
} = require('../services/saleService');

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
}));

const updateSaleTransit = ('/', rescue(async (req, res) => {
  const { id } = req.params;

  const saleTransiting = await updateTransit(id);

  return res.status(201).json(saleTransiting);
}));

const updateSaleDelivered = ('/', rescue(async (req, res) => {
  const { id } = req.params;

  const saleDelivered = await updateDelivered(id);

  return res.status(201).json(saleDelivered);
}));

const updateSale = ('/', rescue(async (req, res) => {
  const { id } = req.params;
  const { status, role } = req.body;

  const sale = await update(id, status, role);

  return res.status(200).json(sale);
}));

module.exports = {
  createSaleController,
  getById,
  getSaleBySeller,
  updateSalePreparing,
  updateSaleTransit,
  updateSaleDelivered,
  updateSale,
};
