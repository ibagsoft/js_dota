var Orz = (function() {
	var Orz = Orz || {};
	var Model = Orz.Model = function() {};

	_.extend(Model.prototype,{
		constructor:Model,
		get:function() {},
		set:function() {}
	});

	var View = Orz.View = function() {
		var events = this.events || {};
		var reg = /(.+)\s+(.+)/;
		for(var item in events){
			var arr = reg.exec(item);
			$(arr[2]).bind(arr[1],$.proxy(this[events[item]],this));
		}
	};

	View.extend = Model.extend = function(options) {
		var parent = this;
		var klass = function() {
			if(typeof this.initialize === 'function')
				this.initialize.apply(this,arguments);
			parent.apply(this,arguments);
		};

		var F = function() {this.constructor=klass;};
		F.prototype = this.prototype;
		klass.prototype = new F();
		klass.prototype.__super__ = this.prototype;

		_.extend(klass.prototype,options);

		return klass;
	};

	return Orz;
})();