const debug = require('debug')('app:services:v1:index');
const { orderData } = require('../../mock-data');


const OrderService = {

  getOrderDetails: () => {
    debug('executing products method');
    return Promise.resolve(orderData);
  },

};

module.exports = OrderService;
