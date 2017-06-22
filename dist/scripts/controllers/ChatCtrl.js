angular.module("blocChat").controller("ChatCtrl", function($scope, Message, Room) {
  $scope.roomName

  $scope.rooms = Room.all
  // console.log($scope.rooms)

  $scope.goToRoom = function(room) {
    $scope.selectedRoom = room
    console.log($scope.selectedRoom)
    $scope.messages = Message.getByRoomId($scope.selectedRoom.id)
  //   $state.go("room", {id:id})
  }
  $scope.message = function() {
  }
})
