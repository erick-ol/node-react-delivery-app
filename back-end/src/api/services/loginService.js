const { User } = require('../../database/models/user');

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email: email },
  })

  return user;
}

module.exports = {
  findByEmail,
}