const { SalesProduct } = require('../../database/models');

const SALE_PRODUCT_ID = 'product_id';

const createSaleProduct = async (id, quantity, saleId) => {
  console.log('antes', SalesProduct);
  const product = await SalesProduct.bulkInsert([{}]);
  console.log(product);
  return product.product_id;
};

module.exports = {
  createSaleProduct,
};