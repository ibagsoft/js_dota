var Todo = Orz.Model.extend({
	initialize:function(title) {
		if(typeof this.get('title') === 'undefined')
			this.set({title:title});
	}
});

var TodoApp = Orz.View.extend({
	el:$('#todoapp'),
	initialize:function() {
		this.input = $('#new_todo');
		this.todo_list = $('#todo_list')
	},
	events:{
		'keypress #new_todo':'add_todo'
	},
	add_todo:function(e) {
		//Hack:
		if(e.keyCode !== 13)
			return;

		var title = this.input.val();
		this.todo_list.append("<li>" + title + "</li>");
		this.input.val('');
	}
});

var todoApp = new TodoApp();