var App = angular.module('App', []);

App.controller('controller', function($scope, $http) {
  $http.get('./source-js/data.js')
       .then(function(res){
          $scope.data = res.data.data;
          var dataKeys = res.data.data[0];
          var headArray = Object.keys(dataKeys);
          headArray[0] = "First Name";
          headArray[1] = "Last Name";
          headArray[2] = "Age";
          headArray[3] = "Sex";
          $scope.headers = headArray;
        });
});
