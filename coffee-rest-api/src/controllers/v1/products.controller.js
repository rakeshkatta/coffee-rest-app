const debug = require('debug')('app:controllers:v1:index');

const ProductsService = require('../../services/v1/products');

const ProductsController = {

  products: async (req, res, next) => {
    debug('executing products action');

    try {
      const products = await ProductsService.getAllProducts();
      res.status(200).send(products);
    } catch (err) {
      next(err);
    }
  },
  product: async (req, res, next) => {
    debug('executing product action');

    try {
      const product = await ProductsService.getProducts(req.id);
      res.status(200).send(product);
    } catch (err) {
      next(err);
    }
  },

};

module.exports = ProductsController;
