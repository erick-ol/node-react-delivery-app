const express = require('express');
const { auth } = require('../middlewares');

const { createSaleController: create, getById } = require('../controllers/saleController');

const router = express.Router();

router.post('/', auth, create);
router.get('/:id', auth, getById);

module.exports = router;
