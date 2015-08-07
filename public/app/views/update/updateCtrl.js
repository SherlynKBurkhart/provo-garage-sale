// update listing controller
var app = angular.module('treasureHunters');

app.controller('updateCtrl', function($scope, mainService, $location, listings) {

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
  'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
  'WY').split(' ').map(function (state) { return { abbrev: state }; });

  $scope.userListings = listings;


  $scope.listingClick = function (listing) {
    // var listingmod = listing;
    // Date(listingmod.startDate);
    // Date(listingmod.endDate);
    listing.startDate = new Date(listing.startDate);
    listing.endDate = new Date(listing.endDate);
    listing.time = new Date(listing.time);
  	$scope.editListing = listing;
  }

  $scope.updateListing = function (listingid, listinginfo) {
    mainService.updateListing(listingid, listinginfo).then(function (res, err) {
      if (err) {
        alert('Update failed, please try again');
      }
      else {
        alert('Listing updated successfully!');
      }
    })
  }

});
