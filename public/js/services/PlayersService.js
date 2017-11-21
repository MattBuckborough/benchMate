var PlayersFactory = function ($http) {

  var factory = {};

  // this gets all the users
  factory.getUsers = function () {
    data = $http.get('/api/user/getUsers');
    return data;
  };

  //this gets the current user
  factory.getActiveUser = function() {
    data = $http.get('/api/user/getActiveUser');
    return data;
  }

  factory.addGame = function (gameStats){
    if (gameStats.playerTwoScore > gameStats.playerOneScore) {
      $http.post('/api/user/win/'+gameStats.playerTwo);
    } else {
      console.log("player One Won")
    }
    return;
  }

  return factory;

};

angular.module('PlayersService', []).factory('PlayersFactory', PlayersFactory);