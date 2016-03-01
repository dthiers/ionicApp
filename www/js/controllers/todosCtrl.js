application.controller('todosCtrl', ['$scope', 'todoService', function(scope, todoService) {

  scope.todos = todoService.todos;

}])
