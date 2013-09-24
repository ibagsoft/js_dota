var o = {
	name:'jobs',
	age:55,
	sayHello:function() {
		console.log(this.name);
	}
}

o['sayHello']();

console.log(o['name']);