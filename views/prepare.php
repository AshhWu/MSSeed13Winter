<!DOCTYPE html>
<html>
<head>
    <title>微軟寒假分享會</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
    <script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../content/stylesheets/global.css" />
    <link rel="stylesheet" href="../content/stylesheets/prepare.css" />
    <script type="text/javascript">
        function waiting (){
            $('.loading-cover').css('display', 'block');
        }
    </script>
</head>
<body>
    <div class="loading-cover">
        <div class="loading-title">
            Waiting
        </div>
        <div class="footprints-box">
            <img class="footprints" src="../footprints.png">
        </div>
    </div>
    <div class="header-container">
        <div class="header-title">
            微。跡<img class="header-logo" src="../taiwan-1.png" hspace="10">
        </div>
    </div>
    <div class="triangle"></div>
	<div class="col-lg-12 main-container" >
        <div class="guide-title">挑戰賽<span style="color: white;">說明</span></div>
        <div class="deer-box">
            <img class="deer" src="../deer.png">
        </div>
		<div class="col-lg-5 col-lg-offset-7 guide">
            <div class="team-name">
                <div class="moving-arrow">></div>
                隊伍名稱：煞氣a寒分IT組
            </div>
            <div class="team-car-box">
                <div class="moving-arrow">></div>
                您的車子：<img class="team-car" src="../car-1.png" hspace="10">
            </div>
			<div class="guide-detail">
				1.答對題目可前進一格</br>
				2.答錯或跳過題目會倒退一格</br>
				3.題目為四選一的選擇題</br>
				4.最先抵達終點的隊伍獲勝</br>
				5.遊戲時間為15分鐘</br>
            </div>
			<button type="submit" value="" onclick="waiting()">準備好了!</button>
		</div>
    </div>
    <footer>© Microsoft Corporation. Made by MSSeed 13th.</footer>
</body>
</html>
