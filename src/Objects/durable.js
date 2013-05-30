'use strict';
var assert = require('assert');

function Product(title, price) {
	var o = {};
	o.getTitle = function() {
		return title;
	};
	o.getPrice = function() {
		return price;
	};
	o.save = function() {
		return true;
	};
	return o;
}

describe('hybrid', function() {
	it('should return Product object', function() {
		var product = new Product('Code Craft', 99.99);
		assert.equal('Code Craft', product.getTitle());
		assert.equal(99.99, product.getPrice());
		assert(product.save());
	});
});