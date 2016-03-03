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

  // Get all todos
  scope.getTodos = function(){
    tmp = [];

    //var dfd = $q.defer();

    todoService.getAllTodos(db, {
      onSuccess: function(result){
        for(var i = 0; i < result.rows.length; i++){
          tmp.push(result.rows.item(i));
        }
        //dfd.resolve(tmp);
      }
    })
    //return dfd.promise;
    scope.todos = tmp;
  }

  scope.getTodos();

  // Get todo by ID from scope.todos
  scope.getTodo = function(id){
    for (var i = 0; i < scope.todos.length; i++){
      if(scope.todos[i].id === id){
        return scope.todos[i];
      }
    }
  }

  scope.addToTodos = function(todo){
    if (todo.username.length > 0 && todo.title.length > 0){

      // Insert todo to web sql
      todoService.addTodo(db, todo, {
        onSuccess: function(result){
          // TODO: refresh scope.todos
          scope.getTodos();
        }
      });
    }
    // Return to index list with al todos
    $state.go("todo.index");
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
