const { sale, SalesProduct } = require('../../database/models');
const { getSellerId } = require('./userService');
const { getIdsByName } = require('./productService');

const NOT_FOUND = new Error();
NOT_FOUND.code = 'NotFound';
NOT_FOUND.message = 'Seller not found';

const UNAUTHORIZEDUSER_ERROR = new Error();
UNAUTHORIZEDUSER_ERROR.code = 'UnauthorizedUser';
UNAUTHORIZEDUSER_ERROR.message = 'Unauthorized user permissions';

const createSale = async (
  { 
    userId, seller, total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    products,
  },
  ) => {
  const saleId = await getSellerId(seller);

  const newSale = await sale.create({ 
          userId, sellerId: saleId, totalPrice, deliveryAddress, deliveryNumber });
  
  const saleById = newSale.dataValues.id;

  const productsId = await Promise.all(products.map(getIdsByName));
  const newProducts = productsId.map((p) => ({ quantity: p.quantity,
    saleId: saleById,
productId: p.productId }));

  await SalesProduct.bulkCreate(newProducts);
 
  return saleById;
};

const getSaleById = async (id) => {
  const saleData = sale.findOne({ where: { id } });

  return saleData;
};

const getSaleBySellerId = async (id) => {
  const saleBySellerId = await sale.findAll({ where: { sellerId: id } });
  
  if (saleBySellerId.length === 0) {
    throw NOT_FOUND;
  }

  return saleBySellerId;
};

const updatePreparing = async (id) => {
  const saleId = await sale.update({ status: 'Preparando' }, {
    where: { id },
  });
  return saleId;
};

const updateTransit = async (id) => {
  const saleId = await sale.update({ status: 'Em Trânsito' }, {
    where: { id },
  });
  return saleId;
};

const updateDelivered = async (id) => {
  const saleId = await sale.update({ status: 'Entregue' }, {
    where: { id },
  });
  return saleId;
};

const update = async (id, status, role) => {
  if (status !== 'Entregue' && role === 'customer') {
    throw UNAUTHORIZEDUSER_ERROR;
  }
  if (status === 'Entregue' && role !== 'customer') {
    throw UNAUTHORIZEDUSER_ERROR;
  }
  const updateStatus = await sale.update(
    { status },
    { where: { id } },
    );

  return updateStatus;
};

module.exports = { 
  createSale,
  getSaleById,
  getSaleBySellerId,
  updatePreparing,
  updateTransit,
  updateDelivered,
  update,
};