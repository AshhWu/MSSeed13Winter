var app = angular.module('app', []);
var timer;
var gameClock;

app.controller('indexController', ['$scope', '$http', '$window', function($scope, $http, $window){
    $scope.teamName = "";
    $scope.postTeamName = function(){
        if($scope.teamName != ""){
            $('.loading-cover').css('display', 'block');
            console.log("start post!");


            var request = $http({
                method: "post",
                url: "../model/postTeamName.php",
                data: {
                    name: $scope.teamName
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'charset':'utf-8'}
            });

            request.success(function (data) {
                $window.sessionStorage.tName = $scope.teamName;
                $window.sessionStorage.tNum = data;
                window.location.href = "../views/prepare.html?name="+$scope.teamName;
            });
        }
        else{
            alert("Please Enter Team Name!");
        }
    }
}]);

app.controller('prepareController', ['$scope', '$http', '$window', function($scope, $http, $window){
    console.log($window.sessionStorage.tName + " " + $window.sessionStorage.tNum);
    $scope.teamName = $window.sessionStorage.tName;
    $scope.teamIndex = $window.sessionStorage.tNum;
    $scope.teamCar = "../images/car" + $scope.teamIndex + ".png";
}]);
app.controller('arriveController', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.time = $window.sessionStorage.time;
}]);
app.controller('gameoverController', ['$scope', '$http', '$window', function($scope, $http, $window){
    $scope.teamName = $window.sessionStorage.tName;
	$scope.score = $window.sessionStorage.score;
	$scope.time = $window.sessionStorage.time;
}]);
app.controller('rankController', ['$scope', '$http', '$window', function($scope, $http, $window){
    $scope.name = [];
    $scope.score = [];
    $scope.ftime = [];
    $http.get('../model/getRank.php')
        .then(function(response){
            console.log("Get Rank Success!");
            for(var i=0;i<5;i++)
            {
                $scope.name[i] = response.data[i]['name'];
                $scope.score[i] = parseInt(response.data[i]['score']);
                $scope.ftime[i] = getTime(response.data[i]['time']);
            }
        });
    function getTime(s){
		var mins = (s/60).toFixed(0);
		if(mins<10){mins = '0'+mins;}
		var secs = (s%60).toFixed(0);
		if(secs<10){secs = '0'+secs;}
		return mins+":"+secs;
    }
}]);
app.controller('gameController', ['$scope', '$http', '$window', function($scope, $http, $window){
    $scope.teamName = $window.sessionStorage.tName;
    $scope.challenge = "突發事件";
    $scope.password_a = ["----.", "....-", "..---", "--", "..."];
    $scope.password = "";
    $scope.chIndex = -1;
    $scope.questions = [];
    $scope.index = 0;
    $scope.score = 0;
    $scope.timeOutFlag = 0;
    $scope.rightCounts = 0;
    $scope.refreshIntervalId = 0;
    $scope.checkPass = function() {
        if ($scope.password == $scope.password_a[$scope.chIndex]){
            $('.challenge-question').css('display', 'none');
            $('.real-question').css('display', 'block');
            $('.circle').css('display', 'block');
            $scope.password = "";
            counter_60s();
            resetTimer();
        }
        else {
            console.log("Wrong Password!!");
        }
    }
    $scope.getQuestions = function(){
        $http.get('../model/getAllQuestions.php')
            .then(function(response){
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
    };
    function stop_counter_60s() {
        clearInterval($scope.refreshIntervalId);
        $('#count').html(60);
    }
    function counter_60s(){
        clearInterval($scope.refreshIntervalId);
        $('#count').css('color', 'white');
        $('#count').html(60);
        $scope.refreshIntervalId = setInterval(function() {
            var n = $('#count').html() - 1;
            $scope.timeOutFlag = 0;
            if (n < 0){
                clearInterval($scope.refreshIntervalId);
                $scope.timeOutFlag = 1;
                $scope.clickNext(5);
                return;
            }
            if (n >= 0) { $('#count').html(n); }
            if ($('#count').html() <= 30 && $('#count').html() >= 10){
                $('#count').css('color', '#FF7744');
            } else if ($('#count').html() < 10){
                $('#count').css('color', '#FF0000');
            }
        }, 1000);
    }
    function gameTimer(){
		startTime = new Date();
		var clock=0;
		$scope.gameFinishCheck = setInterval(function() {
			var clock = (new Date()-startTime)/1000;
			var gameClock = getTime(clock.toFixed(0));
            if ($scope.score >= 30) {
				$window.sessionStorage.time = gameClock;
                var request = $http({
                    method: "post",
                    url: "../model/updateTime.php",
                    data: {
                        team: $window.sessionStorage.tNum,
                        ftime: clock.toFixed(0)
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function () {
                    clearInterval($scope.gameFinishCheck);
                    console.log("Time Updated!")
                    $window.sessionStorage.score = $scope.score;
    				window.location.href="arrive.html";
                });
			}else if(clock.toFixed(0) >= 1200){
				$window.sessionStorage.time = gameClock;
                var request = $http({
                    method: "post",
                    url: "../model/updateTime.php",
                    data: {
                        team: $window.sessionStorage.tNum,
                        ftime: 1200
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function () {
                    console.log("Time Updated!")
                    $window.sessionStorage.score = $scope.score;
    				window.location.href="gameover.html";
                });
			}else{
				$('#clock').html(gameClock);
			}
        }, 1000);
	}
	function getTime(s){
		var mins = (s/60).toFixed(0);
		if(mins<10){mins = '0'+mins;}
		var secs = (s%60).toFixed(0);
		if(secs<10){secs = '0'+secs;}
		return mins+":"+secs;
    }
    function resetTimer() {
        $('#count').removeClass("count-animation");
        $('#l-half').removeClass("l-half-animation");
        $('#r-half').removeClass("r-half-animation");
        setTimeout(function() {
            $('#count').addClass("count-animation");
            $('#l-half').addClass("l-half-animation");
            $('#r-half').addClass("r-half-animation");
        }, 10)
    }
    $scope.clickNext = function(yourAns){
        clearInterval($scope.refreshIntervalId);
        if(yourAns == $scope.ans){
            $scope.score++;
            $('.co-wr').html("Correct!");
            console.log("Hit! Answer is correct!");
        }
        else{
            if($scope.score)
                $scope.score--;
            console.log("Oh! Answer is wrong");
            if($scope.timeOutFlag == 1)
                $('.co-wr').html("Time out!");
            else
                $('.co-wr').html("Wrong!");
        }
        $scope.ans++;
        console.log($scope.score);
        var request = $http({
            method: "post",
            url: "../model/updateScore.php",
            data: {
                team: $window.sessionStorage.tNum,
                score: $scope.score
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function () {
            console.log("Score Updated!")
        });

        $('.r-ans').html($scope.questions[$scope.index][$scope.ans]);
        $('.circle').css('display', 'none');
        $('.real-question').css('display', 'none');
        $('.response-box').css('display', 'block');
        $('.correct-or-not').addClass('animated slideInLeft');
        $('.correct-or-not').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.right-answer').css('display', 'block');
            $('.right-answer').addClass('animated slideInLeft');
        });
        $('.right-answer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.circle').css('display', 'block');
            $('.response-box').css('display', 'none');
            $('.real-question').css('display', 'block');
            counter_60s();
            resetTimer();
            switch ($scope.score) {
                case 5:
                    if ($scope.chIndex == -1) {
                        stop_counter_60s();
                        $scope.chIndex = 0;
                        $('.circle').css('display', 'none');
                        $('.challenge-question').css('display', 'block');
                        $('.real-question').css('display', 'none');
                    }
                    break;
                case 10:
                    if ($scope.chIndex == 0) {
                        stop_counter_60s();
                        $scope.chIndex = 1;
                        $('.circle').css('display', 'none');
                        $('.challenge-question').css('display', 'block');
                        $('.real-question').css('display', 'none');
                    }
                    break;
                case 15:
                    if ($scope.chIndex == 1) {
                        stop_counter_60s();
                        $scope.chIndex = 2;
                        $('.circle').css('display', 'none');
                        $('.challenge-question').css('display', 'block');
                        $('.real-question').css('display', 'none');
                    }
                    break;
                case 20:
                    if ($scope.chIndex == 2) {
                        stop_counter_60s();
                        $scope.chIndex = 3;
                        $('.circle').css('display', 'none');
                        $('.challenge-question').css('display', 'block');
                        $('.real-question').css('display', 'none');
                    }
                    break;
                case 25:
                    if ($scope.chIndex == 3) {
                        stop_counter_60s();
                        $scope.chIndex = 4;
                        $('.circle').css('display', 'none');
                        $('.challenge-question').css('display', 'block');
                        $('.real-question').css('display', 'none');
                    }
                    break;
                default:
            }
            $scope.$apply();
            $('.correct-or-not').removeClass('animated');
            $('.right-answer').removeClass('animated');
            $('.correct-or-not').removeClass('slideInLeft');
            $('.right-answer').removeClass('slideInLeft');
            $('.right-answer').css('display', 'none');
        });
        $scope.index++;
        $scope.questionTitle = $scope.questions[$scope.index][1];
        $scope.A = $scope.questions[$scope.index][2];
        $scope.B = $scope.questions[$scope.index][3];
        $scope.C = $scope.questions[$scope.index][4];
        $scope.D = $scope.questions[$scope.index][5];
        $scope.ans = $scope.questions[$scope.index][6];
        move($scope.score);
        $scope.$apply();
        $scope.timeOutFlag = 0;
    }


var c;
var currentImgMainX,currentImgMainY;
var img,imgMain;

/*window.onload=function()
{
    c=document.getElementById("myCanvas");
    $scope.cxt=c.getContext("2d");
    //主角
    imgMain=new Image();
    imgMain.src="../images/car"+ $window.sessionStorage.tNum + ".png";
    currentImgMainX=461;
    currentImgMainY=30;
    imgMain.onload=function()
    {
        $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
    };
};*/
$(function(){
    c=document.getElementById("myCanvas");
    $scope.cxt=c.getContext("2d");
    //主角
    imgMain=new Image();
    imgMain.src="../images/car"+ $window.sessionStorage.tNum + ".png";
    currentImgMainX=461;
    currentImgMainY=30;
    imgMain.onload=function()
    {
        $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
    };
    $('.loading-title').addClass('animated slideInLeft');
    $('.loading-title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated');
        $(this).removeClass('slideInLeft');
    });
    $('.loading-title').html(5);
    var n = $('.loading-title').html() - 1;
    var startTimer = setInterval(function() {
        $('.loading-title').addClass('animated slideInLeft');
        $('.loading-title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated');
            $(this).removeClass('slideInLeft');
        });
        if (n > 0) { $('.loading-title').html(n--); }
        else {
            counter_60s();
            resetTimer();
	    gameTimer();
            $('.loading-cover').css('display', 'none');
            clearInterval(startTimer);
        }
    }, 1200);
});



function move(count)
{
    $scope.cxt.clearRect(0,0,600,423);
    switch (count)
        {
            case undefined:
                document.getElementById("talkBox").innerHTML="邊界";
                break;
            case 0:
                $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);

                break;
            case 1:
                $scope.cxt.drawImage(imgMain,0,0,256,256,445,90,50,50);

                break;
            case 2:
                $scope.cxt.drawImage(imgMain,0,0,256,256,380,65,50,50);

                break;
            case 3:
                $scope.cxt.drawImage(imgMain,0,0,256,256,380,140,50,50);

                break;
            case 4:
                $scope.cxt.drawImage(imgMain,0,0,256,256,335,115,50,50);

                break;
            case 5:
                $scope.cxt.drawImage(imgMain,0,0,256,256,325,160,50,50);

                break;
            case 6:
                $scope.cxt.drawImage(imgMain,0,0,256,256,380,225,50,50);

                break;
            case 7:
                $scope.cxt.drawImage(imgMain,0,0,256,256,300,250,50,50);

                break;
            case 8:
                $scope.cxt.drawImage(imgMain,0,0,256,256,370,270,50,50);

                break;
            case 9:
                $scope.cxt.drawImage(imgMain,0,0,256,256,320,340,50,50);

                break;
            case 10:
                $scope.cxt.drawImage(imgMain,0,0,256,256,240,300,50,50);

                break;
            case 11:
                $$scope.cxt.drawImage(imgMain,0,0,256,256,220,360,50,50);

                break;
            case 12:
                c.style.backgroundImage="url('../images/map2.jpg')";
                $scope.cxt.drawImage(imgMain,0,0,256,256,270,-10,50,50);

                break;
            case 13:
                $scope.cxt.drawImage(imgMain,0,0,256,256,230,-10,50,50);

                break;
            case 14:
                $scope.cxt.drawImage(imgMain,0,0,256,256,200,50,50,50);

                break;
            case 15:
                $scope.cxt.drawImage(imgMain,0,0,256,256,280,70,50,50);

                break;
            case 16:
                $scope.cxt.drawImage(imgMain,0,0,256,256,200,140,50,50);

                break;
            case 17:
                $scope.cxt.drawImage(imgMain,0,0,256,256,260,170,50,50);

                break;
            case 18:
                $scope.cxt.drawImage(imgMain,0,0,256,256,280,250,50,50);

                break;
            case 19:
                $scope.cxt.drawImage(imgMain,0,0,256,256,300,300,50,50);

                break;
            case 20:
                $scope.cxt.drawImage(imgMain,0,0,256,256,315,190,50,50);

                break;
            case 21:
                $scope.cxt.drawImage(imgMain,0,0,256,256,340,140,50,50);

                break;
            case 22:
                $scope.cxt.drawImage(imgMain,0,0,256,256,360,80,50,50);

                break;
            case 23:
                $scope.cxt.drawImage(imgMain,0,0,256,256,390,0,50,50);

                break;
            case 24:
                c.style.backgroundImage="url('../images/map1.jpg')";
                $scope.cxt.drawImage(imgMain,0,0,256,256,420,350,50,50);

                break;
            case 25:
                $scope.cxt.drawImage(imgMain,0,0,256,256,440,270,50,50);

                break;
            case 26:
                $scope.cxt.drawImage(imgMain,0,0,256,256,470,150,50,50);

                break;
            case 27:
                $scope.cxt.drawImage(imgMain,0,0,256,256,500,65,50,50);

                break;
            case 28:
                $scope.cxt.drawImage(imgMain,0,0,256,256,495,45,50,50);

                break;
            case 29:
                $scope.cxt.drawImage(imgMain,0,0,256,256,460,10,50,50);

                break;
            case 30:
                $scope.cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);

                break;
            case 31:
                count=30;

                break;

        }
}
}]);
