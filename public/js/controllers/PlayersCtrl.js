angular.module('PlayersCtrl', []).controller('PlayersController',function($scope, $route) {

	$scope.tagline = 'Players';	
	$scope.players = [];
	if ($route.current) $scope.players = $route.current.locals.players.data;

});
