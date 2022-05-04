const express = require('express');
const { auth } = require('../middlewares');

const { getProducts } = require('../controllers/productController');

const router = express.Router();

router.get('/', auth, getProducts);

module.exports = router;
