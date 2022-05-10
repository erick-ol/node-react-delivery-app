const express = require('express');
const { auth } = require('../middlewares');

const { createSaleController: create, getById, getSaleBySeller } = require('../controllers/saleController');

const router = express.Router();

router.post('/', auth, create);
router.get('/:id', auth, getById);
router.get('/orders/:id', auth, getSaleBySeller);

module.exports = router;
