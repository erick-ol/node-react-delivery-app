const { sale } = require('../../database/models');
const { getSellerId } = require('./userService');

const NOT_FOUND = new Error();
NOT_FOUND.code = 'NotFound';
NOT_FOUND.message = 'Seller not found';

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
          userId, sellerId: saleId, totalPrice, deliveryAddress, deliveryNumber,
      },
    );

  return product.dataValues.id;
};

const getSaleById = async (id) => {
  const saleData = sale.findOne({ where: { id } });

  return saleData;
};

const getSaleBySellerId = async (id) => {
  const saleBySellerId = await sale.findAll({ where: { seller_id: id } });
  
  if (saleBySellerId.length === 0) {
    throw NOT_FOUND;
  }

  return saleBySellerId;
}

const updatePreparing = async (id) => {
  const saleId = await sale.update({ status: "Preparando" }, {
    where: { id }
  }
);
  return saleId;
}


const updateTransit = async (id) => {
  const saleId = await sale.update({ status: "Em Trânsito" }, {
    where: { id }
  }
);
  return saleId;
}

module.exports = { 
  createSale,
  getSaleById,
  getSaleBySellerId,
  updatePreparing,
  updateTransit,
};