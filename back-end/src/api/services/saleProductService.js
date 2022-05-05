const { saleproduct } = require('../../database/models');

const create = async (id, quantity) => {
  const product = await saleproduct.insertOne({ product_id: id, quantity });

  return product.product_id;
};

module.exports = {
  create,
}