const { sale } = require('../../database/models');
const { getSellerId } = require('./userService');

const createSale = async (
  { 
    userId, 
    seller, 
    total_price: totalPrice, 
    delivery_address: deliveryAddress, 
    delivery_number: deliveryNumber, saleDate, 
  },
  ) => {
  console.log(seller);
  const saleId = await getSellerId(seller);
  console.log(saleId);

  const product = await sale.create(
      { 
          userId, sellerId: userId, totalPrice, deliveryAddress, deliveryNumber, saleDate,
      },
    );
  console.log(product);
  return product;
};

module.exports = { 
  createSale,
};
