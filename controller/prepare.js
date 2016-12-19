var app = angular.module('app', []);

app.controller('prepareController', ['$scope', '$http', function($scope, $http, $window){
    $scope.teamName = "Loading";
    $scope.teamIndex = 1;
    $scope.teamCar = "../images/car" + $scope.teamIndex + ".png";
    $scope.getTeamName = function(){
        var request = $http({
            method: "post",
            url: "../model/getTeamName.php",
            data: {
                index: $scope.teamIndex
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function (data) {
            $scope.teamName = data;
        });
    }
}]);
