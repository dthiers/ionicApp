// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var application = angular.module('application', ['ionic'])

.run(function($ionicPlatform, $rootScope, $templateCache) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $rootScope.$on('$viewContentLoaded', function(){
      $templateCache.removeAll();
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  // $stateProvider.state('home', {
  //
  //   url: '/',
  //   views: {
  //     home: {
  //       templateUrl: 'js/partials/home-partial.html',
  //       controller: 'homeCtrl'
  //     }
  //   }
  // })

  $stateProvider.state('todo', {
    abstract: true,
    url: '/todo',
    views: {
      todo: {
        // templateUrl: 'js/partials/todo-partial.html',
        // controller: 'todoCtrl'
        template: '<ion-nav-view></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('todo.index', {
    url: '',
    templateUrl: 'js/partials/todo-partial.html',
    controller: 'todosCtrl'
  })

  $stateProvider.state('todo.detail', {
    url: "/:todo",
    templateUrl: 'js/partials/todo-detail-partial.html',
    controller: 'todoCtrl',
    resolve: {
      todo: function($stateParams, todoService) {
        return todoService.getTodo($stateParams.todo);
      }
    }
  })


  $stateProvider.state('help', {
    url: '/help',
    views: {
      help: {
        templateUrl: 'js/partials/help-partial.html',
        controller: 'testCtrl'
      }
    }
  })

  $stateProvider.state('info', {
    url: '/info',
    views: {
      info: {
        templateUrl: 'js/partials/info-partial.html',
        controller: 'testCtrl'
      }
    }
  })

})
