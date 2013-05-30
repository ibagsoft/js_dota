'use strict';
var assert = require('assert');

function Product(title, price) {
	this.title = title;
	this.price = price;
}

describe('constructor', function() {
	it('should return Product object', function() {
		var product = new Product('Code Craft', 99.99);
		assert('Code Craft', product.title);
		assert(99.99, product.price);
		assert(product instanceof Product);
		assert.equal(Product, product.constructor);
	});
});