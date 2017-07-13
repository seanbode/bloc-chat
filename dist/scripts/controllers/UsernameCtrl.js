angular.module("blocChat")
  .controller("UsernameCtrl", function($scope, $uibModal) {
    $uibModal.open({
      controller: "ModalCtrl",
      templateUrl: "/templates/username.html"
    })
  })
  .controller("ModalCtrl", function($uibModalInstance, $scope) {
    $scope.user = {
      username: "John",
      password: "test"
    }

    // $scope.login = function() {
      // $http.post("/myapp/login", $scope.user).then(function() {
      // $uibModalInstance.close("ok");
    // }
  })
  .run(function($uibModal) {
    // var currentUser = $cookies.get('blocChatCurrentUser');
    // if (!currentUser || currentUser === '') {
      // $uibModal.open({
      //   url: '/username',
      //   controller: "UsernameCtrl.js",
      //   templateUrl: "/templates/username.html"
      // })
    // }
    $uibModal.open({
      controller: "ModalCtrl",
      templateUrl: "/templates/username.html"
    })
  })
