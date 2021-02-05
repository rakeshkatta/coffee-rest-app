const debug = require('debug')('app:routes:v1');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const products = require('./products');
const discounts = require('./discounts');
const order = require('./order');

router.use('/products', products);
router.use('/discounts', discounts);
router.use('/order', order);

module.exports = router;
