const rescue = require('express-rescue');
const { getAll } = require('../services/productService');

const getProducts = ('/', rescue(async (_req, res) => {
  const products = await getAll();

  return res.status(200).json(products);
}));

module.exports = {
  getProducts,
};
