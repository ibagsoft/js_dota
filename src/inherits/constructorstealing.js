'use strict';
var assert = require('assert');

function Product(title) {
	this.title = title;
}
Product.prototype.save = function() {
	return true;
};

function Book(title) {
	Product.call(this, title);
}
// Book.prototype = new Product();
Book.prototype = Product.prototype;

describe('PrototypeChaining', function() {
	it('book should be product', function() {
		var book = new Book('OO4JS');
		assert.equal('OO4JS', book.title);
		assert(book.save());
	});
});