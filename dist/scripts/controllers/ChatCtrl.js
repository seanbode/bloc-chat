angular.module("blocChat")
  // "use strict";
  .controller("ChatCtrl", function($scope, Message, Room, $cookies) {
    $scope.roomName

    $scope.rooms = Room.all
    // console.log($scope.rooms)

    $scope.currentMessage = "hello world"

    $scope.messages = []

    $scope.sendMessage = function() {
      // $scope.messages.push($scope.currentMessage)
      $scope.messages.push({username:$cookies.get("username"), text:$scope.currentMessage})
      // $cookies.get("username")
      // $scope.messages = ""
    }
    // $scope.goToRoom = function(room) {
      // $scope.selectedRoom = room
      // console.log($scope.selectedRoom)
      // $scope.messages = Message.getByRoomId($scope.selectedRoom.id)
    //   $state.go("room", {id:id})
    // }
    // $scope.message = function() {
    // }
  });
