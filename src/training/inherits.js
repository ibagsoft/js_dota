function Parent (name) {
	this.name = name;
}

function Child (name) {
	Parent.call(this,name);
}

function extend(obj) {
	for(var i=1;i<arguments.length;i++){
		var options = arguments[i];
		for(var prop in options){
			obj[prop] = options[prop];
		}
	}
};

extend(Child.prototype,Parent.prototype,{
	a:'a'
},{
	b:'b'
});

var child = new Child();
console.log(child.a);
console.log(child.b);