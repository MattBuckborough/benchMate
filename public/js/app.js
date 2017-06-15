var app = angular.module('sampleApp', ['ngRoute', 'MainCtrl', 'PlayersCtrl', 'PlayersService', 'GeekCtrl', 'GeekService']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/players', {
			templateUrl: 'views/players.html',
			controller: 'PlayersController',
			conrollerAs: 'playerVm',
			resolve: {
				players : function (PlayersFactory) {
					return PlayersFactory.getPlayers();
				}
			}
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

});

