// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
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
  });
})

.constant("tpConfConst", {
    "modulePath": "",
    "baseUrl": "/saboresaude/"
})

.config(function($stateProvider, $urlRouterProvider, tpConfConst) {

  $urlRouterProvider.otherwise(tpConfConst.baseUrl.concat('home'));

  $stateProvider
  .state('home', {
    url: tpConfConst.baseUrl.concat('home'),
    templateUrl: tpConfConst.modulePath.concat('template/home.html'),
    controller : 'HomeController',
    controllerAs : 'vm'
    
  })
  .state('menu', {
    url: tpConfConst.baseUrl.concat('menu'),
    templateUrl: tpConfConst.modulePath.concat('template/menu.html'),
    controller : 'MenuController',
    controllerAs : 'vm'
    
  })
  
})
