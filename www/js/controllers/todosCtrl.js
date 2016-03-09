application.controller('todosCtrl', ['$scope', 'todoService', '$state', 'localStorageService', '$cordovaSQLite', '$q', 'sharedService', function(scope, todoService, $state, localStorageService, $cordovaSQLite, $q, sharedService) {

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


  scope.getTodos = function(){
      var dfd = $q.defer();
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
  scope.getATodos = function(){
    todoService.getAllTodos(db, {
      onSuccess: function(result){
        scope.todos = result;
      }
    })
  }

  // Load todos when controller loads
  scope.getTodos().then(function(result){
    scope.todos = result;
  });

  // Get todo by ID from scope.todos
  scope.getTodo = function(id){
    for (var i = 0; i < scope.todos.length; i++){
      if(scope.todos[i].id === id){
        return scope.todos[i];
      }
    }
  }

  // This updates the digest (I believe) when rootScope broadcasts an update
  scope.$on('update', function() {
    scope.getTodos().then(function(result){
      scope.todos = result;
    })
  })

  // Add todo to DB
  scope.addToTodos = function(todo){
    if (todo.username.length > 0 && todo.title.length > 0){
      // Insert todo to web sql
      todoService.addTodo(db, todo, {
        onSuccess: function(result){
          // TODO: refresh scope.todos
          if(result.rowsAffected > 0){
            scope.getTodos().then(function(result){
              scope.todos = result;
              scope.update();
            })
          }
        }
      });
    }
    // Return to index list with al todos
    //$state.go("todo.index");
  }

  // Delete todo by id
  scope.deleteTodo = function(id){
    todoService.deleteTodo(db, id, {
      onSuccess: function(result){
        console.log(result);
        scope.getTodos().then(function(result){
          scope.todos = result;
          scope.update();
        })
      }
    })
  }

  // Delete all the records of todos in the database
  scope.deleteAllTodos = function(){
    todoService.deleteAllTodos(db, {
      onSuccess: function(result){
        scope.update();
      }
    })
  }

  scope.clearLocalStorage = function(){
    localStorageService.clear();
  }
  scope.logLocalStorage = function(){
    localStorageService.log();
  }
  scope.update = function(){
    sharedService.update();
  }

}])
