var assert = require('assert'),
		Orz = require('./framework'),
		Class = Orz.Utils.Class;

describe('Javascript class framework',function() {
	var Person,jobs;
	beforeEach(function() {
		Person = Class.new();
		Person.fn = Person.prototype = {
			init:function(name) {
				this.name = name;
			}
		};
		jobs = new Person('jobs');
	});

	it('should have the class',function() {
		assert(jobs);
	});
	it('should have the constructor',function() {
		assert.equal('jobs',jobs.name);
	});
	it('should have the method',function() {
		Person.method('sayHello',function() {
			return 'hi,' + this.name;
		});
		// assert.equal('hi,jobs',jobs.sayHello());
		assert(typeof jobs.sayHello === 'function');
	});
	it('should have the inherits',function() {
		var Man = Person.extend({
			save:function() {
				return this.name + ',saved';
			}
		});
		var jobs = new Man('jobs');
		assert.equal('jobs,saved',jobs.save());
	});
});