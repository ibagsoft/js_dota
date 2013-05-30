'use strict';
var assert = require("assert");

describe('object', function() {
	it('{}', function() {
		var product = {
			title: 'Code Craft',
			price: 99.99
		};
		assert('Code Craft', product.title);
		assert(99.99, product.price);
	});
	it('new Object()', function() {
		var product = new Object();
		product.title = 'Code Craft';
		product.price = 99.99;
		assert('Code Craft', product.title);
		assert(99.99, product.price);
	});
});