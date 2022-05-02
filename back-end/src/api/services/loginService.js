const { User } = require('../../database/models/user');

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  })

  return user;
}

module.exports = {
  findByEmail,
}