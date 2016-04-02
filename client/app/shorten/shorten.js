angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link;
  $scope.data = {};

  $scope.addLink = function() {
    Links.addOne($scope.link).then(function(resp) {
      $scope.data.link = resp.data;
    });
  };
});
