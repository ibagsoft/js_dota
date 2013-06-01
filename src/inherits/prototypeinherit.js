'use strict';
var assert = require('assert');

var product = {
	title: 'OO4JS',
	price: 99.99,
	save: function() {
		return true;
	}
};

describe('prototype inherit', function() {
	it('book is product', function() {
		var book = Object.create(product, {
			publish: {
				value: function() {
					return 'published';
				}
			}
		});
		assert.equal('OO4JS', book.title);
		assert.equal(99.99, book.price);
		assert(book.save());
		assert.equal('published', book.publish());
	});
});