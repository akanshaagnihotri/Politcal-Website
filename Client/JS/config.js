angular.module('PoliticsApp').config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
        templateUrl : "./Views/main.html"
	})
	.when("/AddData",{
		templateUrl:"./Views/add.html"
	})

	.when("/ServerData",{
		templateUrl:"./Views/server.html"
	})
});
