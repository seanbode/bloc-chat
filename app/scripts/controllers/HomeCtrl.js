angular.module("blocChat")
  .controller("HomeCtrl", function($scope, Room) {
    // this.heroTitle = "Welcome to Room #{room}";
    $scope.roomName = Room.name
  })
