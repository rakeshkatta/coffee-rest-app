class ProductModel {
    constructor(properties) {
      const { id, itemName, price, tax, discount } = properties;
  
      this.id = id;
      this.itemName = itemName;
      //this.priceWithoutTax = Number(price);
      this.tax = Number(tax);
      this.price =  Number(price) * this.tax;
      this.discount = discount;
    }
  
    // is used for getting the certain data
    // {
    //     'id': 'item1',
    //     'itemName': 'waterBottle',
    //     'price': 10.00,
    //     'tax':0.00,
    //     'discount': ['discount1', 'discount2']
    //   },
    getProduct() {
      return {
        id: this.id,
        name: this.name,
        //priceWithoutTax: this.priceWithoutTax,
        tax: this.tax,
        price: this.price,
        discounts: this.discounts,
      };
    }
  }
  
  module.exports = {
    ProductModel,
  };
  