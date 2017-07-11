angular.module('MainCtrl', []).controller('MainController', function($scope, $route) {

	////////////////
	// Functions
	////////////////
	var getAge = function(DOB) {
		var today = new Date();
		var age = today.getFullYear() - DOB.getFullYear();
		var months = today.getMonth() - DOB.getMonth();
		return (months < 0 || (months === 0 && today.getDate() < DOB.getDate()))? age-1: age;
	}


	////////////////
	// Init
	////////////////
	$scope.user = {};
	if ($route.current) $scope.user = $route.current.locals.user.data;
	$scope.user.DOB = new Date(new Date($scope.user.DOB).getTime() + new Date().getTimezoneOffset() * 60 * 1000);
	$scope.user.age = getAge($scope.user.DOB);
});