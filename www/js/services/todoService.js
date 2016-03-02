application.factory('todoService', ['webSqlService', function(webSqlService) {

  var todoListService = {
    // todos: [
    //     // {title: "Take out the trash", username: "Dion", done: true},
    //     // {title: "Do laundry", username: "Dion", done: false},
    //     // {title: "Start cooking dinner", username: "Dion", done: false}
    //  ]

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
      // todoListService.todos.push(
      //   {title: todo.title, username: todo.username, done: false}
      // )
      webSqlService.insertTodo(todo);
    },
    getAllTodos: function(){
      webSqlService.getAllTodos();
    }
  }
}])
