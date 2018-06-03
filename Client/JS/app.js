var myapp=angular.module("PoliticsApp",["ngRoute"]);
angular.module('PoliticsApp').controller('ParentCtrl',['$scope',function($scope){
   this.MyName = "Gulshan Kakkar";
}])
.controller('ChildCtrl',['$scope',function($scope){
	this.MyName = "Pulkit Kakkar";
}]);