application.factory('localStorageService', ['$window', function($window) {
  return {
    set: function(key, value){
      console.log(value);
      $window.localStorage.setItem(key, value);
      console.log($window.localStorage);
    },
    get: function(key, defaultValue){
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value){
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key){
      return JSON.parse($window.localStorage[key] || '{}');
    },
    clear: function(){
      $window.localStorage.clear();
    },
    log: function(){
      console.log($window.localStorage);
    }
  }
}])
