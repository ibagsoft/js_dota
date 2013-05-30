'use strict';
var assert = require('assert');

function Product(title, price) {
	this.title = title;
	this.price = price;
}

Product.prototype = {
	constructor: Product,
	save: function() {
		return true;
	}
};

describe('hybrid', function() {
	it('should return Product object', function() {
		var product = new Product('Code Craft', 99.99);
		assert.equal('Code Craft', product.title);
		assert.equal(99.99, product.price);
		assert(product.save());
	});
});