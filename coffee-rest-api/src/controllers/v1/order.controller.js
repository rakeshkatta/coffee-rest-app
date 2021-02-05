const debug = require('debug')('app:controllers:v1:index');

const OrderService = require('../../services/v1/order');
const ProductsService = require('../../services/v1/products');

const OrderController = {

  order: async (req, res, next) => {
    debug('executing order action');

    try {
      const orderInvoice = await OrderService.getOrderDetails();

      res.status(200).send(orderInvoice);
    } catch (err) {
      next(err);
    }
  },
  createOrder: async (req, res) => {
    req.body.id = 'item1';
    try {
      const prods = (await ProductsService.getProduct(req.body.id)).
      res.status(200).send(prods);
    } catch (err) {

    }
  }

};

module.exports = OrderController;
