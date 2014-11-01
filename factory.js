angular.module('myApp')
  .factory('library', function ($http) {
    var services = {
      get: get
    }

    return services;

    function get(){
      return $http.get('api/book-data');
    }
  });