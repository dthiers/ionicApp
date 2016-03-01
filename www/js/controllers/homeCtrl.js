application.controller('homeCtrl', ['$scope', function(scope) {

  scope.clicked = false;

  scope.btnClick = function(){
    scope.clicked = !scope.clicked;
  }

}]);
