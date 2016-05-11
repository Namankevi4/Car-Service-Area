var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope,$http) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.services = [];

$http.get('/services').success( function(response){    
    $scope.services = response;
    console.log(response.length);
})
 
  
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);