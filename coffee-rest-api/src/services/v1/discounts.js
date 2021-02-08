const debug = require('debug')('app:services:v1:index');
const { discountsData } = require("../../mock-data");
const { DiscountProductModel } = require('../../models/discount-product.model');

const DiscountsService = {

  getAllDiscounts: () => {
    debug('executing discounts method');

    return Promise.resolve(discountsData);
  },

  // getDiscountProduct : discountProduct => new DiscountProductModel(productsData[discountProduct.id])
  // .getDiscountProduct(discountProduct.discount),

};

module.exports = {
  DiscountsService,
  //getDiscountProduct,
};