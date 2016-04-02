// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  // TODO: update view when user gets password wrong
    // 1. userController.js: signin function TODO
    // 2. sends back res with some flag for incorrect password
    // 3. services.js: Auth factory signin function
          // check for res flag and act accordingly

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        // TODO: if res flag says wrong pw:
            // update $scope so view can alert user of wrong pw
        // else:
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
