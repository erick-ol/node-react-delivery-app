const express = requrie('express');
const { auth } = require('../middlewares');

const { saleProductController: create } = require('../controllers/saleProductController');

const router = express.Router();

router.post('/:id', auth, create);

module.exports = router;
