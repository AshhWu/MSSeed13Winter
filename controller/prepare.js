var app = angular.module('app', []);

app.controller('prepareController', ['$scope', '$http', function($scope, $http, $window){
    var oReq = new XMLHttpRequest(); //New request object
    oReq.onload = function() {
        //This is where you handle what to do with the response.
        //The actual data is found on this.responseText
        alert(this.responseText); //Will alert: 42
    };
    oReq.open("get", "../model/postTeamName.php", true);
    oReq.send();
    $scope.teamName = "Loading";
    $scope.teamIndex = 1;
    $scope.teamCar = "";
    $scope.getTeamName = function(){
        var request = $http({
            method: "post",
            url: "../model/getTeamIndex.php",
            data: {
                index: $scope.teamName
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function (data) {
            $scope.teamIndex = data;
            $scope.teamCar = "../images/car" + $scope.teamIndex + ".png";
        });
    }
}]);
