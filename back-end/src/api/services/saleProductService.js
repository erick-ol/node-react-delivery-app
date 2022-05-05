const { saleproduct } = require('../../database/models');

const SALE_PRODUCT_ID = 'product_id';

const create = async (id, quantity) => {
  const product = await saleproduct.insertOne({ [SALE_PRODUCT_ID]: id, quantity });

  return product.product_id;
};

module.exports = {
  create,
};