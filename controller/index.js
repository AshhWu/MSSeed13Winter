var app = angular.module('app', []);

app.controller('indexController', ['$scope', '$http', function($scope, $http, $window){

    $scope.postTeamName = function(){

        $http.get('model/getAllQuestions.php')
            .then(function(response){
                console.log(response);
                console.log("Get Questions Success!");
                for(var index in response.data){
                    $scope.questions[index] = response.data[index];

                    console.log($scope.questions[index][1]);
                }
                $scope.questionTitle = $scope.questions[$scope.index][1];
                $scope.A = $scope.questions[$scope.index][2];
                $scope.B = $scope.questions[$scope.index][3];
                $scope.C = $scope.questions[$scope.index][4];
                $scope.D = $scope.questions[$scope.index][5];
                $scope.ans = $scope.questions[$scope.index][6];
                counter_60s();
                resetTimer();
            })
        /*var request = $http({
            method: "post",
            url: "../model/postName.php",
            data: {
                name: $scope.name
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
            console.log("fu");
        });*/
    }
}]);
