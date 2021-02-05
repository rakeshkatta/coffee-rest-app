const debug = require('debug')('app:routes:v1:order');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const OrderController = require('../../controllers/v1/order.controller');

router.route('/')
  .get(OrderController.order);
// router.route('/:id')
//   .put(ProductsController.product);

module.exports = router;
