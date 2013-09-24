function jQuery () {
	
}

console.log(jQuery.prototype.constructor);

jQuery.fn = jQuery.prototype = {
	constructor:jQuery,
	init:function() {},
	show:function() {}
}

console.log(jQuery.prototype.constructor);