const express = require('express');
const { auth } = require('../middlewares');

const {
  createSaleController: create,
  getById,
  getSaleBySeller, 
  updateSalePreparing, 
  updateSaleTransit, 
  updateSaleDelivered,
  updateSale,
  getSalesByCustomerId,
} = require('../controllers/saleController');

const router = express.Router();

router.post('/', auth, create);
router.get('/orders/:id', auth, getSaleBySeller);
router.get('/:id', auth, getById);
router.get('/all/:id', auth, getSalesByCustomerId);
router.put('/orders/:id', auth, updateSale);
router.put('/orders/:id/preparing', auth, updateSalePreparing);
router.put('/orders/:id/transit', auth, updateSaleTransit);
router.put('/orders/:id/delivered', auth, updateSaleDelivered);

module.exports = router;
