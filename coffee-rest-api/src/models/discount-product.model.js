const { ProductModel } = require('./product.model');

class DiscountProductModel extends ProductModel {
  // is used for getting the certain data
  getDiscountProduct(discount) {
    return {
      id: this.id,
      discountType: this.discountType,
      discount,
      products,
      //price: this.price - this.price * Number(discount),
    };
  }
}

module.exports = {
  DiscountProductModel,
};
