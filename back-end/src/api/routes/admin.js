const express = require('express');
const { authAdmin } = require('../middlewares');

const { registerUser } = require('../controllers/registerController');

const router = express.Router();

router.post('/', authAdmin, registerUser);

module.exports = router;