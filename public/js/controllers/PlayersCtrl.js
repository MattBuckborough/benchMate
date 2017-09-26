angular.module('PlayersCtrl', []).controller('PlayersController',function($scope, $window, $route, PlayersFactory) {

	$scope.tagline = 'Players';
	$scope.sortType = "points";
	$scope.addModal = false;
	$scope.playerModal = false;
	$scope.searchValues = '';
	$scope.descending = true;	
	$scope.players = [];
	if ($route.current) $scope.players = $route.current.locals.user.data;
	for(var i = 0; i < $scope.players.length; i++) {
		$scope.players[i].points = ($scope.players[i].w * 2) + $scope.players[i].otl;
	}

	$scope.playerName = '';
	$scope.playerPosition = '';
	$scope.playerNumber = '';
	$scope.thisPlayer = {};

	$scope.addPlayerModalSubmit = function() {
		if ($scope.playerName.length < 1) {
			window.alert("Enter a name.");
		} else if (!$scope.playerPosition || $scope.playerPosition == '') {
			window.alert("Select a position.");
		} else if (!($scope.playerNumber >= 1 && $scope.playerNumber < 100)) {
			window.alert("Enter a valid number (1-99)");
		} else {
			PlayersFactory.addPlayer({name:$scope.playerName, position:$scope.playerPosition, num:$scope.playerNumber});
			$scope.players.push({
				name:$scope.playerName, 
				position:$scope.playerPosition, 
				number: $scope.playerNumber,
				stats : {g:0, a:0, gp: 0, PIMs:0}  
			});
			$scope.playerName = '';
			$scope.playerPosition = '';
			$scope.playerNumber = '';
			$scope.addModal = false;
		}
	}

	$scope.addPlayerModalClose = function() {
		if (window.confirm("Delete unsaved progress?")) {
			$scope.playerName = '';
			$scope.playerPosition = '';
			$scope.playerNumber;
			$scope.addModal = false;
		}
	}

	$scope.viewPlayerModalOpen = function(player) {
		$scope.thisPlayer = player;
		$scope.playerModal = true;
	}

	$scope.viewPlayerModalClose = function() {
		$scope.playerName = '';
		$scope.playerPosition = '';
		$scope.playerNumber;
		$scope.thisPlayer = {};
		$scope.playerModal = false;
	}

	$scope.viewPlayerModalDelete = function(player) {
		if (window.confirm("Confirm deletion of " + player.name + "?") ){

			$scope.playerName = '';
			$scope.playerPosition = '';
			$scope.playerNumber;
			$scope.thisPlayer = {};
			$scope.playerModal = false;
			$scope.players.splice($scope.players.indexOf(player),1);
			PlayersFactory.deletePlayer(player._id)
			$scope.playerModal = false;
		}
	}
});
