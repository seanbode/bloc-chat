angular
  .module('blocChat', ['firebase', 'ui.bootstrap', 'ngCookies'])
  .config(function($locationProvider) {
    var config = {
      apiKey: "AIzaSyBIAJTB01QWRVb9FtuXrQFj380tCefc1w4", // Your Firebase API key
      authDomain: "bloc-chat-117d5.firebaseapp.com",        // Your Firebase Auth domain ("*.firebaseapp.com")
      databaseURL: "https://bloc-chat-117d5.firebaseio.com", // Your Firebase Database URL("https://*.firebaseio.com")
      // projectId: "bloc-chat-117d5",
      storageBucket: "bloc-chat-117d5.appspot.com",
      messagingSenderId: "324260113714"
    };
    firebase.initializeApp(config);
  })
