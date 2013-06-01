'use strict';
var assert = require('assert');

var product = {
	title: 'OO4JS',
	price: 99.99
};

var persistence = {
	save: function() {
		return true;
	}
};

function include() {
	var arg, prop, o = {};
	for (arg = 0; arg < arguments.length; arg += 1) {
		for (prop in arguments[arg]) {
			if (arguments[arg].hasOwnProperty(prop)) {
				o[prop] = arguments[arg][prop];
			}
		}
	}
	return o;
}

describe('prototype inherit', function() {
	it('book is product', function() {
		var book = include(product, persistence);
		assert.equal('OO4JS', book.title);
		assert.equal(99.99, book.price);
		assert(book.save());
	});
});