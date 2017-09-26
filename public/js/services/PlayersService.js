var PlayersFactory = function ($http) {

  var factory = {};

  // this gets all the userss
  factory.getUsers = function () {
    data = $http.get('/api/user/getUsers');
    return data;
  };

  factory.getActiveUser = function() {
    data = $http.get('/api/user/getActiveUser');
    return data;
  }

  return factory;

};

angular.module('PlayersService', []).factory('PlayersFactory', PlayersFactory);