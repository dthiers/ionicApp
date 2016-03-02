application.controller('todosCtrl', ['$scope', 'todoService', '$state', 'localStorageService', '$cordovaSQLite', function(scope, todoService, $state, localStorageService, $cordovaSQLite) {

  //db = window.openDatabase('todolist', '1.0', 'database for todos', 2 * 1024 * 1024);
  db = $cordovaSQLite.openDB({name : "todolist"});
  $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS todo (username text, title text, time, done integer)', []);

  scope.todos = [];

  scope.shouldShowDelete = true;

  scope.getTodos = function(){
    todoService.getAllTodos(db, {
      onSuccess: function(result){
        for(var i = 0; i < result.rows.length; i++){
          scope.todos.push(result.rows.item(i));
        }
      }
    });
  }

  scope.getTodos();

  scope.addToTodos = function(todo){
    if (todo.username.length > 0 && todo.title.length > 0){
      //todoService.addTodo(todo);
      var query = 'INSERT INTO todo (username, title, time, done) VALUES (?, ?, ?, ?)';
        $cordovaSQLite.execute(db, query , [todo.username, todo.title, new Date(), 0]).then(function(result){
          console.log("INSERT ID -> " + result.insertId);
          todoService.getAllTodos(db, {
            onSuccess: function(result){
              for(var i = 0; i < result.rows.length; i++){
                scope.todos.push(result.rows.item(i));
              }
            }
          });
        }, function(error){
          console.log(error)
      })

      //localStorageService.setObject(todo.username, {title: todo.title});

      $state.go("todo.index");
    }
  }

  scope.clearLocalStorage = function(){
    localStorageService.clear();
  }
  scope.logLocalStorage = function(){
    localStorageService.log();
  }

}])
