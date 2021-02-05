const debug = require('debug')('app:services:v1:index');
const { discountsData } = require("../../mock-data");

const DiscountsService = {

  getAllDiscounts: () => {
    debug('executing discounts method');

    return Promise.resolve(discountsData);
  },

};

module.exports = DiscountsService;
