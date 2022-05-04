const product = require('../../database/models/product');

const getAll = async () => {
  const products = await product.findAll();

  return products.map((product) => product.dataValues);
}

module.exports = {
  getAll,
};
