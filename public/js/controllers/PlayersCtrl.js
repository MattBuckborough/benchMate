angular.module('PlayersCtrl', []).controller('PlayersController',function($scope, $window, $route, PlayersFactory) {

	$scope.tagline = 'Players';
	$scope.sortType = "points";
	$scope.gameSortType = "ts";
	$scope.addModal = false;
	$scope.playerModal = false;
	$scope.searchValues = '';
	$scope.descending = true;	
	$scope.players = [];
	if ($route.current) $scope.players = $route.current.locals.users.data;
	for(var i = 0; i < $scope.players.length; i++) {
		$scope.players[i].points = ($scope.players[i].w * 2) + $scope.players[i].otl;
	}

	$scope.user = {};
	if ($route.current) $scope.user = $route.current.locals.user.data;
	console.log($scope.user);

	if ($route.current) $scope.games = $route.current.locals.game.data;
	console.log($scope.games);

	$scope.playerName = ''; 
	$scope.playerPosition = '';
	$scope.playerNumber = '';
	$scope.thisPlayer = {};

	$scope.addGameModalSubmit = function() {
		if (!$scope.playerOne || !$scope.playerTwo) {
			window.alert("Fill in the player fields");
		} else if ($scope.playeOneScore == $scope.playerTwoScore) {
			window.alert("There must be a winner")
		} else {
			PlayersFactory.addGame({playerOne:$scope.playerOne, 
									playerTwo:$scope.playerTwo, 
									playerOneScore:$scope.playerOneScore,
									playerTwoScore:$scope.playerTwoScore,
									otl:$scope.otl});

			if ($scope.playerOneScore > $scope.playerTwoScore) {
				for (var i = 0; i < $scope.players.length;i++) {
					if ($scope.playerOne == $scope.players[i].email){
						$scope.players[i].gp++;
						$scope.players[i].w++;
						$scope.players[i].points = $scope.players[i].points + 2;
					}
					if ($scope.playerTwo == $scope.players[i].email){
						$scope.players[i].gp++;
						$scope.otl?$scope.players[i].otl++:$scope.players[i].l++;
						if ($scope.otl) $scope.players[i].points++;
					}
				}
				$scope.games.push({
					l: $scope.playerTwoScore,
					loser: $scope.playerTwo,
					otl: $scope.otl,
					ts: new Date(),
					w: $scope.playerOneScore,
					winner: $scope.playerOne 
				});
			} else {
				for (var i = 0; i < $scope.players.length;i++) {
					if ($scope.playerTwo == $scope.players[i].email){
						$scope.players[i].gp++;
						$scope.players[i].w++;
						$scope.players[i].points = $scope.players[i].points + 2;
					}
					if ($scope.playerOne == $scope.players[i].email){
						$scope.players[i].gp++;
						$scope.otl?$scope.players[i].otl++:$scope.players[i].l++;
						if ($scope.otl) $scope.players[i].points++;
					}
				}
				$scope.games.push({
					w: $scope.playerTwoScore,
					winner: $scope.playerTwo,
					otl: $scope.otl,
					ts: new Date(),
					l: $scope.playerOneScore,
					loser: $scope.playerOne 
				});
			}
	
			$scope.playerOne = '';
			$scope.playerTwo = '';
			$scope.playerOneScore = '';
			$scope.playerTwoScore = '';
			$scope.otl = false;
			$scope.addModal = false;
		}
	}

	$scope.addGameModalClose = function() {
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
			PlayersFactory.deleteUser(player._id);
			$scope.playerModal = false;
		}
	}
});
