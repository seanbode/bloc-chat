(function() {
  function Message($firebaseArray, $scope) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    // var username = $cookies.get("username")

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      return ref.orderByChild("roomId").equalTo(roomId)
    };

    Message.send = function(message) {
      messages.$add(message)
    }
    // $scope.messages
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
