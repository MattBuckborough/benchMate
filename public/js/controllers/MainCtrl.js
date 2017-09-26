angular.module('MainCtrl', []).controller('MainController', function($scope, $route) {

	////////////////
	// Functions
	////////////////
	


	////////////////
	// Init
	////////////////
	$scope.user = {};
	if ($route.current) $scope.user = $route.current.locals.user.data;
});