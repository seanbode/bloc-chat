angular.module("blocChat")
  .controller("RoomCtrl", function($scope, Room) {
    // this.heroTitle = "Welcome to Room #{room}";
    $scope.roomName

    $scope.rooms = Room.all
    // console.log($scope.rooms)
  });
