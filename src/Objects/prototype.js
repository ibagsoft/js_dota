'use strict';
var assert = require('assert');

var baseObject = {
	title: 'Code Craft',
	price: 99.99,
	save: function() {
		return true;
	}
};

function Product() {}

Product.prototype = baseObject;
Product.prototype.constructor = Product;

describe('prototype', function() {
	it('should return Product object', function() {
		var product = new Product();
		assert.equal('Code Craft', product.title);
		assert.equal(99.99, product.price);
		assert(product.save());
		assert(Product, product.__proto__, baseObject);
	});
});