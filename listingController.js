/* angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
  /*
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
  }
]);
*/

/*
   ABOVE IS ORIGINAL GIVEN CODE

*/
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.newListing = ' ';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
   //   $scope.listings.push($scope.newListing.code);
  //  $scope.newListing = ' ';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {};
  }
]);