const debug = require('debug')('app:controllers:v1:index');
const { OrderModel } = require("../../models/order.model");
const OrderService = require('../../services/v1/order');
const ProductsService = require('../../services/v1/products');
//const DataService = require('../../services/v1/dataservice');
const { calculateTotalPrice } = require("../../services/v1/order");

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

        try {
            const discountsProducts = [];
            const ordersData = {};
            const { productsId } = req.body;
            console.log('productsId', productsId);
            if (!productsId.length) {
                res
                    .status(400)
                    .send("This order does not have any products");

                return;
            }

            //const products = productsId.map((id) => {console.log("id", id);ProductsService.getProduct(id)});
            const products =[{
                'id': 'item1',
                'itemName': 'waterBottle',
                'price': 10.00,
                'tax':0.00,
                'discount': ['discount1', 'discount2']
          }];
            console.log('products-->', products);
            products.forEach((product) => {
                console.log('single product', product);
                product.discount.forEach((id) => {
                    discountsProducts.push(...ProductsService.getProductsByDiscountId(id));
                });
            });
            console.log('discountsProducts', discountsProducts);

            const totalPrice = calculateTotalPrice([...discountsProducts, ...products]);
            console.log('totalPrice', totalPrice);

            const order = new OrderModel({
                totalPrice,
                id: Math.floor(1 + (100 - 1) * Math.random()),
                products: [...discountsProducts, ...products],
            });
            console.log('order')
            console.log(order)

            ordersData[order.id] = order;
            res.status(200).send(order.getOrder());
        } catch (err) {
            console.log("something went wrong");
        }
    }

};

module.exports = OrderController;
