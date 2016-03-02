application.factory('todoService', function() {

  var todoListService = {
    todos: [
        {title: "Take out the trash", done: true},
        {title: "Do laundry", done: false},
        {title: "Start cooking dinner", done: false}
     ]
  }

  // var todos = [
  //     {title: "Take out the trash", done: true},
  //     {title: "Do laundry", done: false},
  //     {title: "Start cooking dinner", done: false}
  //  ]

  return {
    todos: todoListService.todos,
    getTodo: function(index) {
      return todoListService.todos[index]
    },
    addTodo: function(todo){
      todoListService.todos.push(
        {title: todo, done: false}
      )
    }
  }
})
