'use strict';
var assert = require('assert');

var Base = {};
Base.extend = function(conf) {
	return function() {
		if (typeof conf['constructor'] !== 'undefined') {
			conf['constructor'].apply(this, arguments);
			delete conf['constructor'];
		}
		for (var pro in conf) {
			this[pro] = conf[pro];
		}
	};
};

var Person = Base.extend({
	constructor: function(name) {
		this.name = name;
	},
	get_name: function() {
		return this.name;
	}
});


describe('Base', function() {
	it('extend', function() {
		var jobs = new Person('jobs');
		assert.equal('jobs', jobs.get_name());
	});
});