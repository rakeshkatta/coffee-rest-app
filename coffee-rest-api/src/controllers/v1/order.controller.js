const debug = require('debug')('app:controllers:v1:index');

const ProductsService = require('../../services/v1/order');

const OrderController = {

  order: async (req, res, next) => {
    debug('executing order action');

    try {
      const orderInvoice = await ProductsService.getOrderDetails();

      res.status(200).send(orderInvoice);
    } catch (err) {
      next(err);
    }
  },

};

module.exports = OrderController;
