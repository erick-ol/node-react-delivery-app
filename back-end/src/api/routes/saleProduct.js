const express = require('express');
const { auth } = require('../middlewares');

<<<<<<< HEAD
const {
  createSaleController: create,
  getById,
  getSaleBySeller, 
  updateSalePreparing, 
  updateSaleTransit, 
  updateSaleDelivered,
  updateSale,
} = require('../controllers/saleController');
=======
const { 
  createSaleController: create, 
  getById, 
  getSaleBySeller, 
  updateSalePreparing, 
  updateSaleTransit } = require('../controllers/saleController');
>>>>>>> 16d3aad8d656d97d464c09c951faa5c5b1ab2b30

const router = express.Router();

router.post('/', auth, create);
router.get('/orders/:id', auth, getSaleBySeller);
router.get('/:id', auth, getById);
router.put('/orders/:id', auth, updateSale);
router.put('/orders/:id/preparing', auth, updateSalePreparing);
router.put('/orders/:id/transit', auth, updateSaleTransit);
<<<<<<< HEAD
router.put('/orders/:id/delivered', auth, updateSaleDelivered);
=======
>>>>>>> 16d3aad8d656d97d464c09c951faa5c5b1ab2b30

module.exports = router;
