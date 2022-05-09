const { sale } = require('../../database/models');
const { getSellerId } = require('./userService');

const createSale = async (
  { 
    userId, 
    seller, 
    total_price: totalPrice, 
    delivery_address: deliveryAddress, 
    delivery_number: deliveryNumber,
  },
  ) => {
  const saleId = await getSellerId(seller);

  const product = await sale.create(
      { 
          userId, sellerId: saleId, totalPrice, deliveryAddress, deliveryNumber
      },
    );

  return product.dataValues.id;
};

const getSaleById = async (id) => {
  const saleData = sale.findOne({ where: { id } });

  return saleData;
};

module.exports = { 
  createSale,
  getSaleById,
};
