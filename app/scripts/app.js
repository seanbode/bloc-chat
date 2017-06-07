angular
  .module('blocChat', ['ui.router'])
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
           templateUrl: '/pages/index.html'
       })
    $urlRouterProvider.otherwise('/');
  });
