'use strict';
var assert = require('assert');

function Product() {}
Product.prototype.save = function() {
	return true;
};

function Book() {}
Book.prototype = new Product();

describe('PrototypeChaining', function() {
	it('book should be product', function() {
		var book = new Book();
		assert(book.save());
	});
});