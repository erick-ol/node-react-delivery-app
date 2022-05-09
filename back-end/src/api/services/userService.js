const { user } = require('../../database/models');

const getSellerId = async (name) => {
  const seller = await user.findOne({ where: { name, role: 'seller' } });

  return seller.dataValues.id;
};

module.exports = {
  getSellerId,
};
