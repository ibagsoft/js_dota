function Class () {
	var klass = function() {

	};
	klass.extend = function() {
		var child = function() {
			child.constructor.apply(this,arguments);
		};
		child.prototype = this.prototype;
		return child;
	};
	return klass;
}

var Person = new Class();
Person.prototype.sayHello = function() {
	console.log(this.name);
};
var Man = Person.extend();
Man.constructor = function(name) {
	this.name = name;
};
var jobs = new Man('jobs');
jobs.sayHello();