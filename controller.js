angular.module('myApp')
  .controller('lit-ctrl', function ($scope, library) {
    $scope.bookData;
    library.get().then(function(response){
      $scope.bookData = response.data;
    })
  })