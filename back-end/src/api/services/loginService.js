const { user } = require('../../database/models');

const findByEmail = async (email) => {
  const data = await user.findOne({
    where: { email },
  });

  return data;
}

module.exports = {
  findByEmail,
}