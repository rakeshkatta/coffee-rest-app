const debug = require('debug')('app:controllers:v1:index');

const DiscountsService = require('../../services/v1/discounts');

const DiscountsController = {

  discounts: async (req, res, next) => {
    debug('executing discounts action');

    try {
      const discounts = await DiscountsService.getAllDiscounts();
      res.status(200).send(discounts);
    } catch (err) {
      next(err);
    }
  },

};

module.exports = DiscountsController;
