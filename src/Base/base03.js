'use strict';
var assert = require('assert');

var Base = {};
Base.extend = function(conf) {
	var klass = function() {
		if (typeof this['init'] !== 'undefined') {
			this['init'].apply(this, arguments);
		}
	};
	for (var pro in conf) {
		if (pro === 'constructor') {
			klass.prototype['init'] = conf[pro];
		} else {
			klass.prototype[pro] = conf[pro];
		}
	}

	var proto = {};
	for (var attr in this.prototype) {
		if (typeof this.prototype[attr] === 'function') {
			proto[attr] = this.prototype[attr];
		}
	}
	klass.prototype.__proto__ = proto;

	klass.prototype.base = function() {
		if (typeof proto['init'] !== 'undefined') {
			proto['init'].apply(proto, arguments);

			for (var attr in proto) {
				if (typeof proto[attr] != 'function') {
					this[attr] = proto[attr];
				}
			}
		}
	};

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
	get_password: function() {
		return this.password;
	}
});

var Teacher = User.extend({
	constructor: function(name) {
		this.base(name, '123');
	},
	say_hello: function() {
		return 'hello,' + this.get_name();
	}
});

describe('Base', function() {
	it('extend', function() {
		var jobs = new Teacher('jobs');
		assert.equal('jobs', jobs.get_name());
		assert.equal('123', jobs.get_password());
		assert.equal('hello,jobs', jobs.say_hello());
	});
});