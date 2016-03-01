application.controller('MainCtrl', [ '$scope', '$timeout', "$ionicScrollDelegate", "$filter", "$ionicPopup", function(sc, $timeout, $ionicScrollDelegate, $filter, $ionicPopup) {
	sc.title = "hello world";

	sc.helloWorld = function(){
		alert("Hello world!");
	}
}]);
