const adminRouter = require('./admin');
const loginRouter = require('./login');
const imageRouter = require('./images');
const sellerRouter = require('./saleProduct');
const productRouter = require('./product');
const registerRouter = require('./register');
const saleProductRouter = require('./saleProduct');

module.exports = {
  loginRouter,
  registerRouter,
  productRouter,
  saleProductRouter,
  imageRouter,
  sellerRouter,
  adminRouter,
};
