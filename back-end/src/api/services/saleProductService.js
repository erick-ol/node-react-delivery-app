const {SaleProduct} = require('../../database/models/saleproduct');

const SALE_PRODUCT_ID = 'product_id';

const createSaleProduct = async (id, quantity) => {
  console.log('antes', SaleProduct );
  const product = await SaleProduct.create({ [SALE_PRODUCT_ID]: id, quantity });
  console.log(product);
  return product.product_id;
};

module.exports = {
  createSaleProduct,
};