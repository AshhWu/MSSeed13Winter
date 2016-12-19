var app = angular.module('app', []);

app.controller('indexController', ['$scope', '$http', function($scope, $http, $window){

    $scope.postTeamName = function(){
        console.log("start post!");
        var request = $http({
            method: "post",
            url: "../model/postTeamName.php",
            data: {
                name: $scope.teamName
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function (data) {
            console.log("succcess");
        });
    }
}]);
