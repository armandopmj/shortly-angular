angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {},
  $scope.loading = false,

  $scope.addLink = function() {
    $scope.loading = true;
    Links.postLinks( $scope.link )
         .then( function( data ) {
           $scope.loading = false;
         });
  }

});
