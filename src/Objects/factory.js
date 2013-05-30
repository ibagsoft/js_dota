'use strict';

var assert = require('assert');

function createProduct(title, price) {
	var o = {};
	o.title = title;
	o.price = price;
	return o;
}

describe('factory method', function() {
	it('should return product', function() {
		var product = createProduct('Code Craft', 99.99);
		assert('Code Craft', product.title);
		assert(99.99, product.price);
	});
});