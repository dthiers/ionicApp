application.controller('todoCtrl', ['$scope', 'todo', function(scope, todo) {

  console.log(todo);

  scope.todo = todo;
}])
