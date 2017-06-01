angular.module('blocChat', ['ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
      })
       .state('room', {
          url: '/room',
          controller: 'RoomCtrl',
          templateUrl: '/templates/room.html'
       });
    $urlRouterProvider.otherwise('/');
  });
