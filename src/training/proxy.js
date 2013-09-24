var o = {
	name:'jobs',
	method:function() {
		console.log(this.name);
	}
};

var o2 = {
	name:'gates',
	load:proxy(o,o.method)
};

function proxy (context,func) {
	return function() {
		func.apply(context,arguments);
	}
}

o2.load();