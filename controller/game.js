var app = angular.module('app', []);

app.controller('gameController', ['$scope', '$http', function($scope, $http, $window){
    $scope.questions = [];
    $scope.index = 0;
    $scope.score = 0;
    $scope.refreshIntervalId = 0;
    console.log($scope.questionTitle);

    $scope.getQuestions = function(){
        $http.get('../model/getAllQuestions.php')
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
            })
    };

    function counter_60s(){
        $('.count').removeClass('count-animation');
        $('.count').addClass('count-animation');
        $('.l-half').removeClass('l-half-animation');
        $('.l-half').addClass('l-half-animation');
        $('.r-half').removeClass('r-half-animation');
        $('.r-half').addClass('r-half-animation');
        $('.count').html(60);
        var n = $('.count').html() - 1;
        $scope.refreshIntervalId = setInterval(function() {
            if (n >= 0) { $('.count').html(n--); }
            if ($('.count').html() <= 30 && $('.count').html() >= 10){
                $('.count').css('color', '#FF7744');
            } else if ($('.count').html() < 10){
                $('.count').css('color', '#FF0000');
            }
        }, 1000);
    }

    $scope.clickNext = function(yourAns){
        clearInterval($scope.refreshIntervalId);
        if(yourAns == $scope.ans){
            $scope.score++;
            console.log("Hit! Answer is correct! score:%d index=%d", $scope.$score, $scope.index);
        }
        else{
            if($scope.score)
                $scope.score--;
            console.log("Oh! Answer is wrong");

        }
        $scope.index++;
        $scope.questionTitle = $scope.questions[$scope.index][1];
        $scope.A = $scope.questions[$scope.index][2];
        $scope.B = $scope.questions[$scope.index][3];
        $scope.C = $scope.questions[$scope.index][4];
        $scope.D = $scope.questions[$scope.index][5];
        $scope.ans = $scope.questions[$scope.index][6];
        move($scope.score);
        counter_60s();
    }


var c;
var currentImgMainX,currentImgMainY;
var img,imgMain;

window.onload=function()
{
    c=document.getElementById("myCanvas");
    $scope.cxt=c.getContext("2d");
    //主角
    imgMain=new Image();
    imgMain.src="../images/car1.png";
    currentImgMainX=461;
    currentImgMainY=30;
    imgMain.onload=function()
    {
        $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
    };
};


function move(count)
{
    switch (count)
        {
            case undefined:
                document.getElementById("talkBox").innerHTML="邊界";
                break;
            case 0:
                $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);

                break;
            case 1:
                $scope.cxt.clearRect(461,40,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,445,90,50,50);

                break;
            case 2:
                $scope.cxt.clearRect(445,90,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,380,65,50,50);

                break;
            case 3:
                $scope.cxt.clearRect(380,65,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,380,140,50,50);

                break;
            case 4:
                $scope.cxt.clearRect(380,140,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,335,115,50,50);

                break;
            case 5:
                $scope.cxt.clearRect(335,115,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,325,160,50,50);

                break;
            case 6:
                $scope.cxt.clearRect(325,160,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,380,225,50,50);

                break;
            case 7:
                $scope.cxt.clearRect(380,225,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,300,250,50,50);

                break;
            case 8:
                $scope.cxt.clearRect(300,250,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,370,270,50,50);

                break;
            case 9:
                $scope.cxt.clearRect(370,270,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,320,340,50,50);

                break;
            case 10:
                $scope.cxt.clearRect(320,340,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,240,300,50,50);

                break;
            case 11:
                $scope.cxt.clearRect(240,300,50,50); $scope.cxt.drawImage(imgMain,0,0,256,256,220,360,50,50);

                break;
            case 12:
                $scope.cxt.clearRect(220,360,50,50); c.style.backgroundImage="url('../images/map2.jpg')";
                $scope.cxt.drawImage(imgMain,0,0,256,256,270,-10,50,50);

                break;
            case 13:
                $scope.cxt.clearRect(270,-10,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,230,-10,50,50);

                break;
            case 14:
                $scope.cxt.clearRect(230,-10,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,200,50,50,50);

                break;
            case 15:
                $scope.cxt.clearRect(200,50,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,280,70,50,50);

                break;
            case 16:
                $scope.cxt.clearRect(280,70,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,200,140,50,50);

                break;
            case 17:
                $scope.cxt.clearRect(200,140,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,260,170,50,50);

                break;
            case 18:
                $scope.cxt.clearRect(260,170,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,280,250,50,50);

                break;
            case 19:
                $scope.cxt.clearRect(280,250,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,300,300,50,50);

                break;
            case 20:
                $scope.cxt.clearRect(300,300,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,315,190,50,50);

                break;
            case 21:
                $scope.cxt.clearRect(315,190,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,340,140,50,50);

                break;
            case 22:
                $scope.cxt.clearRect(340,140,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,360,80,50,50);

                break;
            case 23:
                $scope.cxt.clearRect(360,80,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,390,0,50,50);

                break;
            case 24:
                $scope.cxt.clearRect(390,0,50,50);
                c.style.backgroundImage="url('../images/map1.jpg')";
                $scope.cxt.drawImage(imgMain,0,0,256,256,420,350,50,50);

                break;
            case 25:
                $scope.cxt.clearRect(420,350,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,440,270,50,50);

                break;
            case 26:
                $scope.cxt.clearRect(440,270,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,470,150,50,50);

                break;
            case 27:
                $scope.cxt.clearRect(470,150,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,500,65,50,50);

                break;
            case 28:
                $scope.cxt.clearRect(500,65,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,495,45,50,50);

                break;
            case 29:
                $scope.cxt.clearRect(495,45,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,460,10,50,50);

                break;
            case 30:
                $scope.cxt.clearRect(460,10,50,50);
                $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);

                break;
            case 31:
                count=30;

                break;

        }
}
}]);
