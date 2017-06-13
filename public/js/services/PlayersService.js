angular.module('PlayersService', []).factory('Players', ['$http', function($http) {

	return {

    //call to get all players
    get : function() {
      return $http.get('/api/players').then(
        function (response) {
          console.log(response);
          return response
        },
        function (error) {
          console.log("ERROR GETTING PLAYERS" + error)
          console.log(error)
        });
    },

    // this call creates a new player
    create : function(playerData) {
      return $http.post('/api/players', playerData);
    },

    // this call deletes a player by id
    delete : function(playerId) {
      return $http.delete('/api/players/' + id)
    }

  }

}]);