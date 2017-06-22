angular.module('PlayersCtrl', []).controller('PlayersController',function($scope, $route) {

	$scope.tagline = 'Players';
	$scope.sortType = "stats.g";
	$scope.addModal = false
	$scope.searchValues = '';
	$scope.descending = true;	
	$scope.players = [];
	if ($route.current) $scope.players = $route.current.locals.players.data;
	console.log($scope.players)
});
