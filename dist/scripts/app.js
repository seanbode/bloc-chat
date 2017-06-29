angular
  .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    // // $stateProvider
    // //   .state('home', {
    // //       url: '/',
    // //       controller: 'HomeCtrl as home',
    // //       templateUrl: '/templates/home.html'
    // //   })
    // //   .state('room', {
    // //        url: '/room',
    // //        controller: 'RoomCtrl',
    // //        templateUrl: '/pages/index.html'
    // //    })
    // $urlRouterProvider.otherwise('/');
    var config = {
      apiKey: "AIzaSyBIAJTB01QWRVb9FtuXrQFj380tCefc1w4", // Your Firebase API key
      authDomain: "bloc-chat-117d5.firebaseapp.com",        // Your Firebase Auth domain ("*.firebaseapp.com")
      databaseURL: "https://bloc-chat-117d5.firebaseio.com", // Your Firebase Database URL("https://*.firebaseio.com")
      // projectId: "bloc-chat-117d5",
      storageBucket: "bloc-chat-117d5.appspot.com",
      messagingSenderId: "324260113714"
    };
    firebase.initializeApp(config);
  }).run(function($uibModal) {
    // var currentUser = $cookies.get('blocChatCurrentUser');
    // if (!currentUser || currentUser === '') {
      $uibModal.open({
        url: '/username'
        template: "username",
        templateUrl: "/templates/username.html"
      })
    // }
  })
