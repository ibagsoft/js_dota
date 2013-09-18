var assert = require('assert');
function Class () {
	var klass = function() {
		if(typeof this.initialize === 'function'){
			this.initialize.apply(this,arguments);
		}
	};
	klass.method = function(name,func) {
		this.prototype[name] = func;
	};
	klass.extend = function() {
		var child = function() {
		
		};
		var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = this.prototype;
    child.prototype = new Surrogate;
		return child;
	};
	return klass;
}
describe('class',function() {
	it('define class',function() {
		var Person = new Class();
		var jobs = new Person();
	});

	it('define constructor',function() {
		var Person = new Class();
		Person.prototype.initialize = function(name) {
			this.name = name;
		};
		var jobs = new Person('jobs');
		assert.equal('jobs',jobs.name);
	});

	it('define method',function() {
		var Person = new Class();
		Person.method('sayHello',function() {
			return 'hello,world';
		});
		var jobs = new Person();
		assert.equal('hello,world',jobs.sayHello());
	});

	it('define extend',function() {
		var Person = new Class();
		Person.method('sayHello',function() {
			return 'hello,world';
		});
		var Man = Person.extend();
		var jobs = new Man();
		assert.equal('hello,world',jobs.sayHello());
	});
});
