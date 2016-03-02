// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var db = null;

var application = angular.module('application', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $templateCache, $cordovaSQLite) {
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

    // DATABASE


    db = window.openDatabase('todolist', '1.0', 'database for todos', 2 * 1024 * 1024);

    // DATABASE

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

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


  $stateProvider.state('add', {
    url: '/add',
    views: {
      add: {
        templateUrl: 'js/partials/add-partial.html',
        controller: 'todosCtrl'
      }
    }
  })

  $stateProvider.state('delete', {
    url: '/delete',
    views: {
      delete: {
        templateUrl: 'js/partials/delete-partial.html',
        controller: 'todosCtrl'
      }
    }
  })
  // $stateProvider.state('todo', {
  //   abstract: true,
  //   url: '/todo',
  //   views: {
  //     todo: {
  //       // templateUrl: 'js/partials/todo-partial.html',
  //       // controller: 'todoCtrl'
  //       template: '<ion-nav-view></ion-nav-view>'
  //     }
  //   }
  // }).state('todo.index', {
  //   url: '',
  //   templateUrl: 'js/partials/todo-partial.html',
  //   controller: 'todosCtrl'
  // }).state('todo.detail', {
  //   url: "/:todo",
  //   templateUrl: 'js/partials/todo-detail-partial.html',
  //   controller: 'todoCtrl',
  //   resolve: {
  //     todo: function($stateParams, todoService) {
  //       return todoService.getTodo($stateParams.todo);
  //     }
  //   }
  // }).state('help', {
  //   url: '/help',
  //   views: {
  //     help: {
  //       templateUrl: 'js/partials/help-partial.html',
  //       controller: 'testCtrl'
  //     }
  //   }
  // }).state('info', {
  //   url: '/info',
  //   views: {
  //     info: {
  //       templateUrl: 'js/partials/info-partial.html',
  //       controller: 'testCtrl'
  //     }
  //   }
  // })
})
