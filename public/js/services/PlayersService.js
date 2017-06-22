var PlayersFactory = function ($http) {

  var factory = {};

  // this gets all the players
  factory.getPlayers = function () {
    data = $http.get('/api/players');
    return data;
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