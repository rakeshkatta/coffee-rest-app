const debug = require('debug')('app:routes:v1:discounts');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const DiscountsController = require('../../controllers/v1/discounts.controller');

router.route('/')
  .get(DiscountsController.discounts);

module.exports = router;
