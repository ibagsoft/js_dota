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

function F() {}
F.prototype = Product.prototype;
Book.prototype = new F();
Book.uber = Product.prototype;
Book.prototype.constructor = Book;

Book.prototype.publish = function() {
	return 'published';
};

describe('PrototypeChaining', function() {
	it('product should not publish method', function() {
		var product = new Product('OO4JS');
		assert(typeof product['publish'] === 'undefined');
	});
	it('book should have the publish method', function() {
		var book = new Book('OO4JS');
		assert.equal('published', book.publish());
	});
});