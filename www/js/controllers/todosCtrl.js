application.controller('todosCtrl', ['$scope', 'todoService', '$state', function(scope, todoService, $state) {

  scope.todos = todoService.todos;

  scope.shouldShowDelete = true;

  scope.newTodo = "";

  scope.addToTodos = function(todo){
    if (todo.length > 0){
      todoService.addTodo(todo);
      scope.todos = todoService.todos;
      scope.newTodo = "";
      $state.go("todo.index");
    }
  }

}])
