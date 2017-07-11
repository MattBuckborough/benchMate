var PlayersFactory = function ($http) {

  var factory = {};

  // this gets all the players
  factory.getPlayers = function () {
    data = $http.get('/api/players/getPlayers');
    return data;
  };

  // this call creates a new player
  factory.addPlayer = function (playerData) {
    return $http.put('/api/players/addPlayer', playerData).then(
      function() {},
      function() {}
    );
  };

  // this call deletes a player by id
  factory.deletePlayer = function (playerId) {
    return $http.post('/api/players/deletePlayer/' + playerId).then(
      function() { },
      function() { }
    )
  }

  factory.getActiveUser = function() {
    data = $http.get('/api/players/getActiveUser');
    return data;
  }

  return factory;

};

angular.module('PlayersService', []).factory('PlayersFactory', PlayersFactory);