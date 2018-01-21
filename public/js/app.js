var app = angular.module('sampleApp', ['ngRoute', 'MainCtrl', 'PlayersCtrl', 'PlayersService']);

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
				user : function (PlayersFactory) {
					return PlayersFactory.getActiveUser();
				},
				users : function (PlayersFactory) {
					return PlayersFactory.getUsers();
				},
				game : function (PlayersFactory) {
					return PlayersFactory.getGames();
				}
			}
		})

		.when('/games', {
			templateUrl: 'views/games.html',
			controller: 'PlayersController',
			resolve: {
				user : function (PlayersFactory) {
					return PlayersFactory.getActiveUser();
				},
				users : function (PlayersFactory) {
					return PlayersFactory.getUsers();
				},
				game : function (PlayersFactory) {
					return PlayersFactory.getGames();
				}
			}
		});

	$locationProvider.html5Mode(true);

});
