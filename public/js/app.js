var app = angular.module('sampleApp', ['ngRoute', 'MainCtrl', 'PlayersCtrl', 'PlayersService', 'GeekCtrl', 'GeekService']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider

		// home page
		.when('/dashboard', {
			templateUrl: 'views/home.html',
			controller: 'MainController',
			resolve: {
				user : function (PlayersFactory) {
					return PlayersFactory.getActiveUser();
				}
			}
		})

		.when('/players', {
			templateUrl: 'views/players.html',
			controller: 'PlayersController',
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
