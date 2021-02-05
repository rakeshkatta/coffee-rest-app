const debug = require('debug')('app:services:v1:index');
const { productsData } = require('../../mock-data');

const ProductsService = {

  getAllProducts: () => {
    debug('executing products method');

    return Promise.resolve(productsData);
  },
  // getProduct: (id) => {
  //   debug('executing product method');

  //   return Promise.resolve(productsData);
  // },

};

module.exports = ProductsService;
