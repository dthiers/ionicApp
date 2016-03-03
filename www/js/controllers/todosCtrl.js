application.controller('todosCtrl', ['$scope', 'todoService', '$state', 'localStorageService', '$cordovaSQLite', '$q', function(scope, todoService, $state, localStorageService, $cordovaSQLite, $q) {

  db = window.openDatabase('todolist', '1.0', 'database for todos', 2 * 1024 * 1024);
  //db = $cordovaSQLite.openDB({name : "todolist"});
  //$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS todo (username text, title text, time, done integer)', []);


  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN
  // TODO: ALLE DB REQUEST IN DE SERVICE ZETTEN


  scope.todos = [];

  scope.shouldShowDelete = true;


  scope.getATodos = function(){
      var dfd = $q.defer();
      //scope.todos = [];
      scope.todos = todoService.getAllTodos(db, {
        onSuccess: function(result){
          //promise equivalent van een return
          dfd.resolve(result);
        }
      });
      //We beloven dat deze dfd later nog een value krijg
      return dfd.promise
  }







  // Get all todos
  scope.getTodos = function(){
    todoService.getAllTodos(db, {
      onSuccess: function(result){
        scope.todos = result;
      }
    })
  }

  // Load todos when controller loads
  scope.getTodos();

  // Get todo by ID from scope.todos
  scope.getTodo = function(id){
    for (var i = 0; i < scope.todos.length; i++){
      if(scope.todos[i].id === id){
        return scope.todos[i];
      }
    }
  }

  // Add todo to DB
  scope.addToTodos = function(todo){
    if (todo.username.length > 0 && todo.title.length > 0){

      // Insert todo to web sql
      todoService.addTodo(db, todo, {
        onSuccess: function(result){
          // TODO: refresh scope.todos
          if(result.rowsAffected > 0){
            scope.todos = scope.getTodos();
          }
        }
      });
    }
    // Return to index list with al todos
    //$state.go("todo.index");
  }

  scope.deleteAllTodos = function(){
    todoService.deleteAllTodos(db, {
      onSuccess: function(result){
        console.log(result);
      }
    })
  }

  scope.clearLocalStorage = function(){
    localStorageService.clear();
  }
  scope.logLocalStorage = function(){
    localStorageService.log();
  }

}])
