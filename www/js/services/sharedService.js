application.factory('sharedService', ['$rootScope', function($rootScope){
  return {
    update: function(){
      $rootScope.$broadcast('update');
    }
  }
}])
