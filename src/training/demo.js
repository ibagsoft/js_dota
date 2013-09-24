// Generated by CoffeeScript 1.6.3
(function() {
  var Man, Person, gates, jobs, method, sayHello, _ref,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  sayHello = function() {
    var age, args, name;
    name = arguments[0], age = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    this.name = name;
    if (age == null) {
      age = 55;
    }
    return console.log("hi," + this.name + ":" + age);
  };

  sayHello('jobs');

  Person = (function() {
    function Person(name) {
      this.name = name;
      this.sayHello = __bind(this.sayHello, this);
    }

    Person.prototype.sayHello = function() {
      return console.log(this.name);
    };

    Person.find = function(id) {
      return console.log("query " + id + " ...");
    };

    return Person;

  })();

  Person.find(5);

  jobs = new Person('jobs');

  method = jobs.sayHello;

  method();

  Man = (function(_super) {
    __extends(Man, _super);

    function Man() {
      _ref = Man.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Man;

  })(Person);

  gates = new Man('gates');

  gates.sayHello();

}).call(this);
