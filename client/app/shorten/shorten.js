angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link;

  $scope.addLink = function() {
    console.log("-------shorten ctrl link: ", $scope.link);
    Links.addOne($scope.link);
  };
});
