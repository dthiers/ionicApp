application.controller('testCtrl', ['$scope', 'testService', function(scope, testService) {

  scope.test = "Hier zijn we dan eindelijk";


  scope.btnClick = function(){
    testService.alert();
  }
}]);
