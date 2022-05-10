const express = require('express');
const { auth } = require('../middlewares');

const { createSaleController: create, getById, getSaleBySeller, updateSalePreparing, updateSaleTransit } = require('../controllers/saleController');

const router = express.Router();

router.post('/', auth, create);
router.get('/orders/:id', auth, getSaleBySeller);
router.get('/:id', auth, getById);
router.put('/orders/:id/preparing', auth, updateSalePreparing);
router.put('/orders/:id/transit', auth, updateSaleTransit);


module.exports = router;
