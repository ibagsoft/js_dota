var o = {
	name:'jobs',
	age:55,
	sayHello:function() {
		console.log(this.name);
	}
};
var method = o.sayHello;
method();
var j = new method();
o.sayHello();
o.sayHello.call({name:'gates'},1,2,3);
o.sayHello.apply({name:'abc'},[1,2,3]);

function Person (name,age) {
	this.name = name;
	this.age = age;
}
Person.prototype.show = function() {
	console.log('show');
};
Person.prototype.sayHello = function() {
	console.log(this.name);
};

node-inspector

node --debug-brk hello.js


/*console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor === Person);*/