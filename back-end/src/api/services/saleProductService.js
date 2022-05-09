const { SalesProduct } = require('../../database/models');

// eslint-disable-next-line no-unused-vars
// const SALE_PRODUCT_ID = 'product_id';

const createSaleProduct = async (_id, _quantity, _saleId) => {
  const product = await SalesProduct.bulkInsert([{}]);

  return product.product_id;
};

module.exports = {
  createSaleProduct,
};