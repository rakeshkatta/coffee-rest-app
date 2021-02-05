const debug = require('debug')('app:routes:v1:products');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const ProductsController = require('../../controllers/v1/products.controller');

router.route('/')
  .get(ProductsController.products);
// router.route('/:id')
//   .put(ProductsController.product);

module.exports = router;
