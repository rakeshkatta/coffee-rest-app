const assert = require('assert');

const IndexService = require('../../../src/services/v1/products');

suite('IndexService', () => {
  suite('#products()', () => {
    test('should return "products" string', async () => {
      const products = await IndexService.getAllProducts();
      assert.equal(products, 'products');
    });
  });
});
