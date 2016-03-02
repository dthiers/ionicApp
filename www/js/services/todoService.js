application.factory('todoService', ['$cordovaSQLite', function($cordovaSQLite) {

  var todoListService = {
    // todos: [
    //     // {title: "Take out the trash", username: "Dion", done: true},
    //     // {title: "Do laundry", username: "Dion", done: false},
    //     // {title: "Start cooking dinner", username: "Dion", done: false}
    //  ]

  }

  return {
    todos: todoListService.todos,
    getTodo: function(index) {
      return todoListService.todos[index]
    },
    addTodo: function(todo){
      // todoListService.todos.push(
      //   {title: todo.title, username: todo.username, done: false}
      // )
      //webSqlService.insertTodo(todo);
    },
    getAllTodos: function(db, options){
      query = "SELECT * FROM todo";
      $cordovaSQLite.execute(db, query, []).then(function(result) {
        console.log(result.rows);
        options.onSuccess(result);
      })
    }
  }
}])
