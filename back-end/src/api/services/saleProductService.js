const { saleProduct } = require('../../database/models/saleproduct');

const SALE_PRODUCT_ID = 'product_id';

const createSaleProduct = async (id, quantity) => {
  console.log('antes', saleProduct);
  const product = await saleProduct.create({ [SALE_PRODUCT_ID]: id, quantity });
  console.log(product);
  return product.product_id;
};

module.exports = {
  createSaleProduct,
};