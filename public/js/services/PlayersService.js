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
      $http.post('/api/user/loss/'+gameStats.playerOne+"/"+gameStats.otl);
      $http.post('/api/game/addGame/' +gameStats.playerTwo+"/"
                                      +gameStats.playerOne+"/"
                                      +gameStats.playerTwoScore+"/"
                                      +gameStats.playerOneScore+"/"
                                      +gameStats.otl);
    } else {
      $http.post('/api/user/win/'+gameStats.playerOne);
      $http.post('/api/user/loss/'+gameStats.playerTwo+"/"+gameStats.otl);
      $http.post('/api/game/addGame/' +gameStats.playerOne+"/"
                                      +gameStats.playerTwo+"/"
                                      +gameStats.playerOneScore+"/"
                                      +gameStats.playerTwoScore+"/"
                                      +gameStats.otl);
    }
    return;
  }

  return factory;

};

angular.module('PlayersService', []).factory('PlayersFactory', PlayersFactory);