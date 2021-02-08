const debug = require('debug')('app:services:v1:index');
const { productsData, discountsData } = require('../../mock-data');
const { ProductModel } = require("../../models/product.model");
const { getDiscountProduct } = require("../../services/v1/discounts");



const ProductsService = {

  getAllProducts: () => {
    debug('executing products method');

    return Promise.resolve(productsData);
  },
 // getProduct : (id) => {console.log('id-->', id); new ProductModel(productsData[id]).getProduct()},
 getProduct : (id) => {console.log('id-->',id);return {
      'id': 'item1',
      'itemName': 'waterBottle',
      'price': 10.00,
      'tax':0.00,
      'discount': ['discount1', 'discount2']
}},
  //getProduct : (id) => {console.log('productsData', productsData[0][id]); productsData[id]},

  // getAllDiscountProducts : () =>
  // Object.values(discountsData).map((discount) => ({
  //   id: discount.id,
  //   products: discount.products.map((item) => getDiscountProduct(item)),
  // })),

  // getProductsByDiscountId : (id) =>
  //   discountsData[id].products.map((item) => getDiscountProduct(item)),

};
  // getProduct: (id) => {
  //   debug('executing product method');

  //   return Promise.resolve(productsData);
  // },

//};

module.exports = ProductsService;
