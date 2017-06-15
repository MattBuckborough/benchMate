var PlayersFactory = function ($http) {

  var factory = {};

  factory.getPlayers = function () {
    return $http.get('/api/players');
  };

  // this call creates a new player
  factory.create = function (playerData) {
    return $http.post('/api/players', playerData);
  };

  // this call deletes a player by id
  factory.delete = function (playerId) {
    return $http.delete('/api/players/' + id)
  }

  return factory;

};

angular.module('PlayersService', []).factory('PlayersFactory', PlayersFactory);