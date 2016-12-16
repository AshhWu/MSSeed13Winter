
var c,cxt;
var currentImgMainX,currentImgMainY;
var img,imgMain;

window.onload=function()
{
    c=document.getElementById("myCanvas");
    cxt=c.getContext("2d");
    //主角
    imgMain=new Image();
    imgMain.src="../images/car1.png";
    currentImgMainX=461;
    currentImgMainY=30;
    count=0;
    team="老子組";
    imgMain.onload=function()
    {
        cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
    };
    document.getElementById("talkBox").innerHTML="組別:"+team+"<br>"+"分數:"+count;

};

window.onkeydown=move;

function move(e)
{
    console.log(e.keyCode);
    var targetImgMainX,targetImgMainY,targetBlock;
    switch(e.keyCode)
        {
            case 40:
                count=count+1;
                break;
                
        }
    
    switch (count)
        {
            case undefined:
                document.getElementById("talkBox").innerHTML="邊界";
                break;
            case 0:
                cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
                
                break;
            case 1:
                cxt.clearRect(461,40,50,50); cxt.drawImage(imgMain,0,0,256,256,445,90,50,50);
                
                break;
            case 2:
                cxt.clearRect(445,90,50,50); cxt.drawImage(imgMain,0,0,256,256,380,65,50,50);
                
                break;
            case 3:
                cxt.clearRect(380,65,50,50); cxt.drawImage(imgMain,0,0,256,256,380,140,50,50);
                
                break;
            case 4:
                cxt.clearRect(380,140,50,50); cxt.drawImage(imgMain,0,0,256,256,335,115,50,50);
                
                break;
            case 5:
                cxt.clearRect(335,115,50,50); cxt.drawImage(imgMain,0,0,256,256,325,160,50,50);
                
                break;
            case 6:
                cxt.clearRect(325,160,50,50); cxt.drawImage(imgMain,0,0,256,256,380,225,50,50);
                
                break;
            case 7:
                cxt.clearRect(380,225,50,50); cxt.drawImage(imgMain,0,0,256,256,300,250,50,50);
                
                break;
            case 8:
                cxt.clearRect(300,250,50,50); cxt.drawImage(imgMain,0,0,256,256,370,270,50,50);
                
                break;
            case 9:
                cxt.clearRect(370,270,50,50); cxt.drawImage(imgMain,0,0,256,256,320,340,50,50);
               
                break;
            case 10:
                cxt.clearRect(320,340,50,50); cxt.drawImage(imgMain,0,0,256,256,240,300,50,50);
                
                break;
            case 11:
                cxt.clearRect(240,300,50,50); cxt.drawImage(imgMain,0,0,256,256,220,360,50,50);
                
                break;
            case 12:
                cxt.clearRect(220,360,50,50); c.style.backgroundImage="url('../images/map2.jpg')";
                cxt.drawImage(imgMain,0,0,256,256,270,-10,50,50);
              
                break;
            case 13:
                cxt.clearRect(270,-10,50,50);
                cxt.drawImage(imgMain,0,0,256,256,230,-10,50,50);
                
                break;
            case 14:
                cxt.clearRect(230,-10,50,50);
                cxt.drawImage(imgMain,0,0,256,256,200,50,50,50);
              
                break;
            case 15:
                cxt.clearRect(200,50,50,50);
                cxt.drawImage(imgMain,0,0,256,256,280,70,50,50);
               
                break;
            case 16:
                cxt.clearRect(280,70,50,50);
                cxt.drawImage(imgMain,0,0,256,256,200,140,50,50);
                
                break;
            case 17:
                cxt.clearRect(200,140,50,50);
                cxt.drawImage(imgMain,0,0,256,256,260,170,50,50);
                
                break;
            case 18:
                cxt.clearRect(260,170,50,50);
                cxt.drawImage(imgMain,0,0,256,256,280,250,50,50);
                
                break;
            case 19:
                cxt.clearRect(280,250,50,50);
                cxt.drawImage(imgMain,0,0,256,256,300,300,50,50);
                
                break;
            case 20:
                cxt.clearRect(300,300,50,50);
                cxt.drawImage(imgMain,0,0,256,256,315,190,50,50);
              
                break;
            case 21:
                cxt.clearRect(315,190,50,50);
                cxt.drawImage(imgMain,0,0,256,256,340,140,50,50);
                
                break;
            case 22:
                cxt.clearRect(340,140,50,50);
                cxt.drawImage(imgMain,0,0,256,256,360,80,50,50);
                
                break;
            case 23:
                cxt.clearRect(360,80,50,50);
                cxt.drawImage(imgMain,0,0,256,256,390,0,50,50);
                
                break;
            case 24:
                cxt.clearRect(390,0,50,50);
                c.style.backgroundImage="url('../images/map1.jpg')";
                cxt.drawImage(imgMain,0,0,256,256,420,350,50,50);
                
                break;
            case 25:
                cxt.clearRect(420,350,50,50);
                cxt.drawImage(imgMain,0,0,256,256,440,270,50,50);
               
                break;
            case 26:
                cxt.clearRect(440,270,50,50);
                cxt.drawImage(imgMain,0,0,256,256,470,150,50,50);
                
                break;
            case 27:
                cxt.clearRect(470,150,50,50);
                cxt.drawImage(imgMain,0,0,256,256,500,65,50,50);
                
                break;
            case 28:
                cxt.clearRect(500,65,50,50);
                cxt.drawImage(imgMain,0,0,256,256,495,45,50,50);
                
                break;
            case 29:
                cxt.clearRect(495,45,50,50);
                cxt.drawImage(imgMain,0,0,256,256,460,10,50,50);
                
                break;
            case 30:
                cxt.clearRect(460,10,50,50);
                cxt.drawImage(imgMain,0,0,256,256,461,40,50,50);
               
                break;
            case 31:
                count=30;
               
                break;
                
        }
        
     document.getElementById("talkBox").innerHTML="組別:"+team+"<br>"+"分數:"+count;
    getTeamScore();
}

function getTeamScore() {
    var URLs = "../model/connectDB.php";//this one
        
    /*
    return $.ajax({
        url: URLs,
        data: {count: count,team:team},
        type: "post",
        dataType: "json",//回傳資料用json檔
        success: function (data) {
            alert("ok");
        },
        error: function (err) {
            alert(err.responseText);
        }
    });
    */
}