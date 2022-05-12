const { product } = require('../../database/models');

const getAll = async () => {
  const products = await product.findAll();

  return products;
};

const getIdsByName = async ({ quantity, name }) => {
  const productIds = await product.findOne({ where: { name } });

  return { quantity, productId: productIds.dataValues.id };
};
module.exports = {
  getAll,
  getIdsByName,
};
