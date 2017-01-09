
var c,cxt;
var currentImgMainX,currentImgMainY;
var img,imgMain,imgMain2,imgMain3,imgMain4,imgMain5;
var count1,count2,count3,count4,count5;
var team1,team2,team3,team4,team5;

window.onload=function()
{
    c=document.getElementById("myCanvas");
    cxt=c.getContext("2d");
    //主角
    imgMain=new Image();
    imgMain.src="../images/car1.png";
    imgMain2=new Image();
    imgMain2.src="../images/car2.png";
    imgMain3=new Image();
    imgMain3.src="../images/car3.png";
    imgMain4=new Image();
    imgMain4.src="../images/car4.png";
    imgMain5=new Image();
    imgMain5.src="../images/car5.png";

    currentImgMainX=461;
    currentImgMainY=30;
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
    imgMain.onload=function()
    {
        cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);
    };

    setInterval(function(){getTeamAndScore();}, 5000);
};


function getTeamAndScore() {
    var URLs = "../../model/getAllCarAndScore.php";//this one
    return $.ajax({
        url: URLs,
        data: null,
        type: "post",
        dataType: "json",//回傳資料用json檔
        success: function (data) {
            console.log(data);
            team1= get_object_vars(data[0]['name']);
            count1=parseInt(get_object_vars(data[0]['score']));
            /*
            team2= data[1]['name'];
            count2=parseInt(data[1]['score']);
            team3= data[2]['name'];
            count3=parseInt(data[2]['score']);
            team4= data[3]['name'];
            count4=parseInt(data[3]['score']);
            team5= data[4]['name'];
            count5=parseInt(data[4]['score']);
*/
            countNum();

        },
        error: function (err) {
            alert(err.responseText);
        }
    });
}

window.onkeydown=move;

function move(e)
{
    console.log(e.keyCode);
    var targetImgMainX,targetImgMainY,targetBlock;
    switch(e.keyCode)
        {
            case 40:
                count1=count1+1;
                break;
            case 37:
                count2=count2+1;
                break;
            case 38:
                count3=count3+1;
                break;
            case 39:
                count4=count4+1;
                break;

        }
    countNum();
}

function countNum()
{
 cxt.clearRect(0,0,500,690);
    switch (count1)
        {
            case undefined:
                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);
                break;
            case 0:

                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain,0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain,0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain,0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain,0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain,0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain,0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain,0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain,0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain,0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain,0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain,0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain,0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain,0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain,0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain,0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain,0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain,0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain,0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain,0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain,0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain,0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain,0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain,0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain,0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain,0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain,0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain,0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain,0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain,0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);

                break;
            case 31:
                count1=30;

                break;
        }

    switch (count2)
        {
            case undefined:
                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain2,0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain2,0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain2,0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain2,0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain2,0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain2,0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain2,0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain2,0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain2,0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain2,0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain2,0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain2,0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain2,0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain2,0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain2,0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain2,0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain2,0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain2,0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain2,0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain2,0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain2,0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain2,0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain2,0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain2,0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain2,0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain2,0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain2,0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain2,0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain2,0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain2,0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain2,0,0,256,256,370,40,50,50);

                break;
            case 31:
                count2=30;

                break;
        }
    switch (count3)
        {
            case undefined:
                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain3,0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain3,0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain3,0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain3,0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain3,0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain3,0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain3,0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain3,0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain3,0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain3,0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain3,0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain3,0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain3,0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain3,0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain3,0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain3,0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain3,0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain3,0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain3,0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain3,0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain3,0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain3,0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain3,0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain3,0,0,256,256,320,370,50,50);

            case 24:

                cxt.drawImage(imgMain3,0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain3,0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain3,0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain3,0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain3,0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain3,0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain3,0,0,256,256,370,40,50,50);

                break;
            case 31:
                count3=30;

                break;
        }
    switch (count4)
        {
            case undefined:
                cxt.drawImage(imgMain,0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain4,0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain4,0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain4,0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain4,0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain4,0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain4,0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain4,0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain4,0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain4,0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain4,0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain4,0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain4,0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain4,0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain,0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain4,0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain4,0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain4,0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain4,0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain4,0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain4,0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain4,0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain4,0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain4,0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain4,0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain4,0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain4,0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain4,0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain4,0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain4,0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain4,0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain4,0,0,256,256,370,40,50,50);

                break;
            case 31:
                count4=30;

                break;
        }
    switch (count5)
    {
        case undefined:
            cxt.drawImage(imgMain5,0,0,256,256,370,40,50,50);
            break;
        case 0:

            cxt.drawImage(imgMain5,0,0,256,256,370,40,50,50);

            break;
        case 1:

            cxt.drawImage(imgMain5,0,0,256,256,380,70,50,50);

            break;
        case 2:

            cxt.drawImage(imgMain5,0,0,256,256,320,50,50,50);

            break;
        case 3:

            cxt.drawImage(imgMain5,0,0,256,256,320,120,50,50);

            break;
        case 4:

            cxt.drawImage(imgMain5,0,0,256,256,280,90,50,50);

            break;
        case 5:

            cxt.drawImage(imgMain5,0,0,256,256,260,140,50,50);

            break;
        case 6:

            cxt.drawImage(imgMain5,0,0,256,256,300,190,50,50);

            break;
        case 7:

            cxt.drawImage(imgMain5,0,0,256,256,220,200,50,50);

            break;
        case 8:

            cxt.drawImage(imgMain5,0,0,256,256,300,230,50,50);

            break;
        case 9:

            cxt.drawImage(imgMain5,0,0,256,256,270,270,50,50);

            break;
        case 10:

            cxt.drawImage(imgMain5,0,0,256,256,190,255,50,50);

            break;
        case 11:

            cxt.drawImage(imgMain5,0,0,256,256,170,300,50,50);

            break;
        case 12:

            cxt.drawImage(imgMain5,0,0,256,256,220,350,50,50);

            break;
        case 13:

            cxt.drawImage(imgMain5,0,0,256,256,180,345,50,50);

            break;
        case 14:

            cxt.drawImage(imgMain5,0,0,256,256,160,400,50,50);

            break;
        case 15:

            cxt.drawImage(imgMain5,0,0,256,256,230,400,50,50);

            break;
        case 16:

            cxt.drawImage(imgMain5,0,0,256,256,150,470,50,50);

            break;
        case 17:

            cxt.drawImage(imgMain5,0,0,256,256,200,500,50,50);

            break;
        case 18:

            cxt.drawImage(imgMain5,0,0,256,256,230,550,50,50);

            break;
        case 19:

            cxt.drawImage(imgMain5,0,0,256,256,245,600,50,50);

            break;
        case 20:

            cxt.drawImage(imgMain5,0,0,256,256,250,530,50,50);

            break;
        case 21:

            cxt.drawImage(imgMain5,0,0,256,256,270,490,50,50);

            break;
        case 22:

            cxt.drawImage(imgMain5,0,0,256,256,290,420,50,50);

            break;
        case 23:

            cxt.drawImage(imgMain5,0,0,256,256,320,370,50,50);

            break;
        case 24:

            cxt.drawImage(imgMain5,0,0,256,256,350,280,50,50);

            break;
        case 25:

            cxt.drawImage(imgMain5,0,0,256,256,360,220,50,50);

            break;
        case 26:

            cxt.drawImage(imgMain5,0,0,256,256,400,130,50,50);

            break;
        case 27:

            cxt.drawImage(imgMain5,0,0,256,256,400,60,50,50);

            break;
        case 28:

            cxt.drawImage(imgMain5,0,0,256,256,400,30,50,50);

            break;
        case 29:

            cxt.drawImage(imgMain5,0,0,256,256,380,0,50,50);

            break;
        case 30:

            cxt.drawImage(imgMain5,0,0,256,256,370,40,50,50);

            break;
        case 31:
            count1=30;

            break;
    }

    document.getElementById("talkBox").innerHTML=team1+": "+count1+"<br>"+team2+": "+count2+"<br>"+team3+": "+count3+"<br>"+team4+": "+count4+"<br>"+team5+": "+count5;
}
