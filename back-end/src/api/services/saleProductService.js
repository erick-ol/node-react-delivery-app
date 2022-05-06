const { SalesProduct } = require('../../database/models');

const SALE_PRODUCT_ID = 'product_id';

const createSaleProduct = async (id, quantity, saleId) => {
  const product = await SalesProduct.bulkInsert([{}]);

  return product.product_id;
};

module.exports = {
  createSaleProduct,
};