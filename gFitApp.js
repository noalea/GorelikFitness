var app = angular.module("gFitApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider

  //home
  .state("home", {
    url:"/",
    templateUrl: "views/home.html"
  })


  $urlRouterProvider.otherwise('/home');

})
