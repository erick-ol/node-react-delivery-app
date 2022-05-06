const { user } = require('../../database/models');

const getSellerId = async (name) => {
  const data = await user.findOne({ where: { name, role: 'seller' } });

  return data;
};

module.exports = {
  getSellerId,
};
