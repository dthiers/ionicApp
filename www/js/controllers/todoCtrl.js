application.controller('todoCtrl', ['$scope', function(scope, todo) {

  console.log(todo);

  scope.todo = todo;
}])
