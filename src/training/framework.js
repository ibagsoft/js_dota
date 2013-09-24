Function.prototype.method = function(name,func) {
	this.prototype[name] = func;
	return this;
};

var Orz = (function() {
	var Orz = Orz || {};
	Orz.Utils = Orz.Utils || {};

	var Class = Orz.Utils.Class = function() {};
	Class.new = function() {
		var klass = function() {
			if(typeof this.init === 'function'){
				this.init.apply(this,arguments);
			}
		};
		klass.extend = function(options) {
			var parent = this;
			var child = function() {
				parent.apply(this,arguments);
			};
			var F = function() {this.constructor = child;};
			F.prototype = this.prototype;
			child.prototype = new F();

			for(var prop in options){
				child.prototype[prop] = options[prop];
			}
			return child;
		};
		return klass;
	};
	return Orz;
})();

module.exports = Orz;