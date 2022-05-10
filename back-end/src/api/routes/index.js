const loginRouter = require('./login');
const registerRouter = require('./register');
const productRouter = require('./product');
const saleProductRouter = require('./saleProduct');
const imageRouter = require('./images');
const sellerRouter = require('./saleProduct')

module.exports = {
  loginRouter,
  registerRouter,
  productRouter,
  saleProductRouter,
  imageRouter,
  sellerRouter,
};