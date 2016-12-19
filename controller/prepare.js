var app = angular.module('app', []);

app.controller('prepareController', ['$scope', '$http', function($scope, $http, $window){
    $scope.teamName = "最猛寒分IT組";
    $scope.teamIndex = 1;
    $scope.teamCar = "../images/car" + 1 + ".png";
    $scope.getTeamName = function(){

    }
}]);
