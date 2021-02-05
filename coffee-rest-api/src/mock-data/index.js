const productsData = [
    {
      'id': 'item1',
      'itemName': 'waterBottle',
      'price': 10.00,
      'tax':0.00,
      'discount': ['discount1', 'discount2']
    },
    {
      'id': 'item2',
      'itemName': 'coffee',
      'price': 40.00,
    },
    {
      'id': 'item2',
      'itemName': 'mocha',
      'price': 35.00,
    }
];

const discountsData = [
    {
      'id': 'discount1',
      'discountType': ['combo', 'single'],
      'discount': 1.00,
      'products': ['item1', 'item2']
    }
  ]

  const orderData = [
    {
        'orderID': 'order1',
        'items':[],
        'total': 0.00,
    }   
  ]

  module.exports = {
    productsData,
    discountsData,
    orderData,
  }
