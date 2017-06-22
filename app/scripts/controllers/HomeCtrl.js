angular.module("blocChat")
  .controller("HomeCtrl", function($scope, Room, $state) {
    // this.heroTitle = "Welcome to Room #{room}";
    $scope.roomName = Room.name

    $scope.rooms = Room.all
    // console.log($scope.rooms)
    // $scope.goToRoom = function(id) {
    //   console.log(id)
    //   $state.go("room", {id:id})
    // }
    $scope.message = function() {
    }
  })
