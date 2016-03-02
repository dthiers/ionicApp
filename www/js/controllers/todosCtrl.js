application.controller('todosCtrl', ['$scope', 'todoService', '$state', 'localStorageService', function(scope, todoService, $state, localStorageService) {

  scope.todos = todoService.getAllTodos();

  scope.shouldShowDelete = true;

  scope.addToTodos = function(todo){
    if (todo.username.length > 0 && todo.title.length > 0){
      todoService.addTodo(todo);

      localStorageService.setObject(todo.username, {title: todo.title});
      scope.todos = todoService.todos;
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
