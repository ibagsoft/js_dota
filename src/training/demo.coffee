sayHello = (@name,age=55,args...) ->
	console.log "hi,#{@name}:#{age}"

sayHello 'jobs'

class Person
	constructor: (@name) ->
	
	sayHello:=>
		console.log @name

	@find = (id) ->
		console.log "query #{id} ..."

Person.find 5
jobs = new Person('jobs')
method = jobs.sayHello
method()

class Man extends Person

gates = new Man('gates')
gates.sayHello()