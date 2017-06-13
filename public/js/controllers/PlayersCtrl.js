angular.module('PlayersCtrl', []).controller('PlayersController', function($scope, Players) {

	$scope.tagline = 'Players';

	//Get Players
	Players.get().then(function (data){
		$scope.players = data.data;
		console.log($scope.players)



	})
});