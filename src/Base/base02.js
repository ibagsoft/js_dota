'use strict';
var assert = require('assert');

var Base = function() {};
Base.extend = function(conf) {
	var klass = function() {
		if (typeof conf['constructor'] !== 'undefined') {
			conf['constructor'].apply(this, arguments);
		}
	};

	for (var parent_pro in this.prototype) {
		klass.prototype[parent_pro] = this.prototype[parent_pro];
	}
	klass.prototype.base = this.prototype['constructor'];
	for (var pro in conf) {
		klass.prototype[pro] = conf[pro];
	}
	klass.extend = Base.extend;
	return klass;
};

var Person = Base.extend({
	constructor: function(name) {
		this.name = name;
	},
	get_name: function() {
		return this.name;
	}
});

var User = Person.extend({
	constructor: function(name, password) {
		this.base(name);
		this.password = password;
	},
	getPassword: function() {
		return this.password;
	}
});

describe('Base', function() {
	it('extend', function() {
		var jobs = new User('jobs', '123');
		assert.equal('jobs', jobs.get_name());
		assert.equal('123', jobs.getPassword());
	});
});