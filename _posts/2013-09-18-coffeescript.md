---
layout: post
title: CoffeeScript
tags: function this class Ruby Python
description: CoffeeScript
---



> 可通过添加微信公共帐号`icodekata`，或者微博帐号`姜志辉iS`与我讨论



## 函数

### 函数定义

	hi = -> 'Hello,coffee'
	
CoffeeScript的函数声明采用的是定义式函数

	var hi;
	hi = function() {
    	return 'Hello,coffee';
    };
  	
因此，在使用前必须先定义他们。

### `is`

	cube = (num) ->
		console.log "you input #{arguments[0]}"
		console.log num % 2 is 1
		Math.pow num,3

	console.log cube(5)
	
CoffeeScript中的is和==都会编译为Javascript中的===，无法使用如Javascript中==那样宽松的、强制类型转化的等于检查。

### 向`Ruby`学习

从此处我们可以看到向Ruby学习的部分：

#### `#{arguments[0]}`

字符串插值语法与Ruby的类似："#{expression}"

#### `return`

隐式返回每个函数最后一个表达式的值

#### `unless`

	odd = (num) ->
		unless typeof num is 'number'
			throw '#{num} is not a number'
		unless num is Math.round num
			throw '#{num} is not an integer'
		unless num > 0
			throw '#{num} is not positive'
		num % 2 is 1

	console.log odd 7
	
#### Ruby code

	def odd(num)
		throw "#{num} is not a Fixnum" unless num.class == Fixnum
		throw "#{num} is not positive" unless num > 0
		num % 2 == 1
	end

	puts odd(5)
	
## 作用域

### 变量与作用域

	odd = (num) ->
		isNumber = (num) ->
			typeof num is 'number'
		isInteger = (num) ->
			num is Math.round num
		throw "#{num} is not a Number" unless isNumber num
		throw "#{num} is not an Integer" unless isInteger num
		num % 2 is 1

	console.log odd 5
	console.log odd '3'
	
使用`-c`将coffee转化为js文件：

  	(function() {
    	var odd;

    odd = function(num) {
      var isInteger, isNumber;
      isNumber = function(num) {
        return typeof num === 'number';
      };
      isInteger = function(num) {
        return num === Math.round(num);
      };
      if (!isNumber(num)) {
        throw "" + num + " is not a Number";
      }
      if (!isInteger(num)) {
        throw "" + num + " is not an Integer";
      }
      return num % 2 === 1;
    };

    console.log(odd(5));

    console.log(odd('3'));

  	}).call(this);
  	
CoffeeScript处理作用域的方式与JavaScript保持一致。但去掉了臭名昭著的var。

### `@`

	setName = (name) -> @name = name
	
使用@name代替this.name。其余与js相同：

    assert = require 'assert'

	setName = (name) -> @name = name

	cat = 
		setName:setName

	cat.setName 'jobs'
	assert.equal 'jobs',cat.name

	setName 'gatsby'
	assert.equal 'gatsby',name

	pig = {}
	setName.apply pig,['gates']
	assert.equal 'gates',pig.name

	jobs = new setName 'jobs'
	assert.equal 'jobs',jobs.name
	
在此分别采用了方法、函数、apply、new四种调用方式，与js的4种调用匹配，结果是一样的。
那么CoffeeScript有哪些独到之处呢？

### `=>`

CoffeeScript使函数绑定到当前作用域非常简单，只需要一个`=>`即可：

	setName = (name) => @name = name

无论该函数在哪里调用，函数内部的this与函数定义时所在位置的this是一样的。

### 向Ruby和Python学习

#### 没有var

CoffeeScript不需要用var，同Ruby和Python一样，将函数中的第一赋值语句视为对局部变量的声明

#### `@`

在变量名前加@表示对实例实量的引用，与Ruby一致

#### `isNumber?`

我觉得这是从Ruby中获得的灵感。但是有所不同：

- Ruby中的?加在了方法的后面，表示该方法是一个谓词方法，要不然返回真，要不然返回假。
- CoffeeScript中的?加在变量的后面，表示该变量为null或者undefined以外的值

#### 代码块

在CoffeeScript中，像Python一样是通过缩进来表现代码的：

	cube = (num) ->
		console.log "you input #{arguments[0]}"
		console.log num % 2 is 1
		Math.pow num,3

	console.log cube(5)
	
#### 省略记法

正如缩进表现的代码一样，CoffeeScript致力于如何让代码的表达尽可能的简洁。它借鉴了Ruby的作法，可以省略()调用方法。我个人很喜欢这种记法，它在DSL中的表现非常的平滑。

	console.log cube(5)
	
#### 默认参数

	add = (a,b=1) ->
		a+b

	console.log add 5
	
CoffeeScript中的默认参数与Ruby和Python很相似。
但又稍有不同。在Ruby和Python中，在b没有被调用时，b=1才会被执行。CoffeeScript则使用的是判断运算符，也就是说显式地传递null或者undefined时也会被调用。

####　参数列

Javascript可以通过arguments获取所有的参数，但是arguments并不支持标准的Array对象的方法，如果想使用Array对象扣的标准方法，则需要使用Array.prototype中的slice或者shift等方法。

CoffeeScript借鉴了Ruby和Python中的参数列，使用…允许传入可变的数组参数，并且为此添加了强大的数组操作(此部分我会单独另起一篇文章介绍CoffeeScript和underscore中的数组操作，此部分Jeremy Ashkenas一定有更酷的心得)

	add = (a,b=1,c...) ->
		count = a + b
		for i in c
			count += i
		count

	console.log add 1,undefined,2,3,4,5
	
#### 注释

CoffeeScript与Ruby和Python一样，都采用`#`作为注释符号


#### Ruby Code

	class Integer
		def initialize(num)
			@num = num
		end
		def odd?
			@num % 2 == 1
		end
		def plus(a,*b)
			count = self + a
			b.each{|item| count += item}
			count
		end
	end

	puts 5.odd?
	puts 5.plus(1,2,3,4,5)
	
#### Python Code

	class Number(int):
		def __init__(self,num):
			self = num
		def add(self,a,*b):
			count = self + a
			for item in b:
				count += item
			return count

	o = Number(5)
	print o.add(1,2,3,4,5)

