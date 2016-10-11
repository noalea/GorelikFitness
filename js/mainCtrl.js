app.controller("mainCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  $scope.openNav = function() {
    $('nav').toggleClass('open-nav');
  }

})
