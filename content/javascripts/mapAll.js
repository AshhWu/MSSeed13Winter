
var c,cxt;
var currentImgMainX,currentImgMainY;
var imgMain = new Array(5);
var count = new Array(5);
var team = new Array(5);

window.onload=function()
{
    c=document.getElementById("myCanvas");
    cxt=c.getContext("2d");
    //主角
    imgMain[0]=new Image();
    imgMain[0].src="../images/car1.png";
    imgMain[1]=new Image();
    imgMain[1].src="../images/car2.png";
    imgMain[2]=new Image();
    imgMain[2].src="../images/car3.png";
    imgMain[3]=new Image();
    imgMain[3].src="../images/car4.png";
    imgMain[4]=new Image();
    imgMain[4].src="../images/car5.png";

    currentImgMainX=461;
    currentImgMainY=30;

    imgMain.onload=function()
    {
        cxt.drawImage(imgMain[0],0,0,256,256,370,40,50,50);
    };

    setInterval(function(){getTeamAndScore();}, 5000);
};
function seeResult() {
    window.location.href="rank.html";
}

function getTeamAndScore() {
    var URLs = "../../model/getAllCarAndScore.php";//this one
    return $.ajax({
        url: URLs,
        data: null,
        type: "post",
        dataType: "json",//回傳資料用json檔
        success: function (data) {
            console.log(data);

            for(var i=0;i<5;i++)
            {
                team[i]=data[i]['name'];
                count[i]=parseInt(data[i]['score']);
            }
            imgMain[0].src="../images/car1.png";
            imgMain[1].src="../images/car2.png";
            imgMain[2].src="../images/car3.png";
            imgMain[3].src="../images/car4.png";
            imgMain[4].src="../images/car5.png";

            countNum();

        },
        error: function (err) {
            alert(err.responseText);
        }
    });
}


function countNum()
{
 cxt.clearRect(0,0,500,690);
    switch (count[0])
        {
            case undefined:
                cxt.drawImage(imgMain[0],0,0,256,256,370,40,50,50);
                break;
            case 0:

                cxt.drawImage(imgMain[0],0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain[0],0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain[0],0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain[0],0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain[0],0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain[0],0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain[0],0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain[0],0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain[0],0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain[0],0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain[0],0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain[0],0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain[0],0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain[0],0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain[0],0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain[0],0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain[0],0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain[0],0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain[0],0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain[0],0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain[0],0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain[0],0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain[0],0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain[0],0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain[0],0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain[0],0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain[0],0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain[0],0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain[0],0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain[0],0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain[0],0,0,256,256,370,40,50,50);

                break;
            case 31:
                count[0]=30;

                break;
        }

    switch (count[1])
        {
            case undefined:
                cxt.drawImage(imgMain[1],0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain[1],0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain[1],0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain[1],0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain[1],0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain[1],0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain[1],0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain[1],0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain[1],0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain[1],0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain[1],0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain[1],0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain[1],0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain[1],0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain[1],0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain[1],0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain[1],0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain[1],0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain[1],0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain[1],0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain[1],0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain[1],0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain[1],0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain[1],0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain[1],0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain[1],0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain[1],0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain[1],0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain[1],0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain[1],0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain[1],0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain[1],0,0,256,256,370,40,50,50);

                break;
            case 31:
                count[1]=30;

                break;
        }
    switch (count[2])
        {
            case undefined:
                cxt.drawImage(imgMain[2],0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain[2],0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain[2],0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain[2],0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain[2],0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain[2],0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain[2],0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain[2],0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain[2],0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain[2],0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain[2],0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain[2],0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain[2],0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain[2],0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain[2],0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain[2],0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain[2],0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain[2],0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain[2],0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain[2],0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain[2],0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain[2],0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain[2],0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain[2],0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain[2],0,0,256,256,320,370,50,50);

            case 24:

                cxt.drawImage(imgMain[2],0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain[2],0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain[2],0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain[2],0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain[2],0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain[2],0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain[2],0,0,256,256,370,40,50,50);

                break;
            case 31:
                count[2]=30;

                break;
        }
    switch (count[3])
        {
            case undefined:
                cxt.drawImage(imgMain[3],0,0,256,256,370,40,50,50);

                break;
            case 0:

                cxt.drawImage(imgMain[3],0,0,256,256,370,40,50,50);

                break;
            case 1:

                cxt.drawImage(imgMain[3],0,0,256,256,380,70,50,50);

                break;
            case 2:

                cxt.drawImage(imgMain[3],0,0,256,256,320,50,50,50);

                break;
            case 3:

                cxt.drawImage(imgMain[3],0,0,256,256,320,120,50,50);

                break;
            case 4:

                cxt.drawImage(imgMain[3],0,0,256,256,280,90,50,50);

                break;
            case 5:

                cxt.drawImage(imgMain[3],0,0,256,256,260,140,50,50);

                break;
            case 6:

                cxt.drawImage(imgMain[3],0,0,256,256,300,190,50,50);

                break;
            case 7:

                cxt.drawImage(imgMain[3],0,0,256,256,220,200,50,50);

                break;
            case 8:

                cxt.drawImage(imgMain[3],0,0,256,256,300,230,50,50);

                break;
            case 9:

                cxt.drawImage(imgMain[3],0,0,256,256,270,270,50,50);

                break;
            case 10:

                cxt.drawImage(imgMain[3],0,0,256,256,190,255,50,50);

                break;
            case 11:

                cxt.drawImage(imgMain[3],0,0,256,256,170,300,50,50);

                break;
            case 12:

                cxt.drawImage(imgMain[3],0,0,256,256,220,350,50,50);

                break;
            case 13:

                cxt.drawImage(imgMain[3],0,0,256,256,180,345,50,50);

                break;
            case 14:

                cxt.drawImage(imgMain[3],0,0,256,256,160,400,50,50);

                break;
            case 15:

                cxt.drawImage(imgMain[3],0,0,256,256,230,400,50,50);

                break;
            case 16:

                cxt.drawImage(imgMain[3],0,0,256,256,150,470,50,50);

                break;
            case 17:

                cxt.drawImage(imgMain[3],0,0,256,256,200,500,50,50);

                break;
            case 18:

                cxt.drawImage(imgMain[3],0,0,256,256,230,550,50,50);

                break;
            case 19:

                cxt.drawImage(imgMain[3],0,0,256,256,245,600,50,50);

                break;
            case 20:

                cxt.drawImage(imgMain[3],0,0,256,256,250,530,50,50);

                break;
            case 21:

                cxt.drawImage(imgMain[3],0,0,256,256,270,490,50,50);

                break;
            case 22:

                cxt.drawImage(imgMain[3],0,0,256,256,290,420,50,50);

                break;
            case 23:

                cxt.drawImage(imgMain[3],0,0,256,256,320,370,50,50);

                break;
            case 24:

                cxt.drawImage(imgMain[3],0,0,256,256,350,280,50,50);

                break;
            case 25:

                cxt.drawImage(imgMain[3],0,0,256,256,360,220,50,50);

                break;
            case 26:

                cxt.drawImage(imgMain[3],0,0,256,256,400,130,50,50);

                break;
            case 27:

                cxt.drawImage(imgMain[3],0,0,256,256,400,60,50,50);

                break;
            case 28:

                cxt.drawImage(imgMain[3],0,0,256,256,400,30,50,50);

                break;
            case 29:

                cxt.drawImage(imgMain[3],0,0,256,256,380,0,50,50);

                break;
            case 30:

                cxt.drawImage(imgMain[3],0,0,256,256,370,40,50,50);

                break;
            case 31:
                count[3]=30;

                break;
        }
    switch (count[4])
    {
        case undefined:
            cxt.drawImage(imgMain[4],0,0,256,256,370,40,50,50);
            break;
        case 0:

            cxt.drawImage(imgMain[4],0,0,256,256,370,40,50,50);

            break;
        case 1:

            cxt.drawImage(imgMain[4],0,0,256,256,380,70,50,50);

            break;
        case 2:

            cxt.drawImage(imgMain[4],0,0,256,256,320,50,50,50);

            break;
        case 3:

            cxt.drawImage(imgMain[4],0,0,256,256,320,120,50,50);

            break;
        case 4:

            cxt.drawImage(imgMain[4],0,0,256,256,280,90,50,50);

            break;
        case 5:

            cxt.drawImage(imgMain[4],0,0,256,256,260,140,50,50);

            break;
        case 6:

            cxt.drawImage(imgMain[4],0,0,256,256,300,190,50,50);

            break;
        case 7:

            cxt.drawImage(imgMain[4],0,0,256,256,220,200,50,50);

            break;
        case 8:

            cxt.drawImage(imgMain[4],0,0,256,256,300,230,50,50);

            break;
        case 9:

            cxt.drawImage(imgMain[4],0,0,256,256,270,270,50,50);

            break;
        case 10:

            cxt.drawImage(imgMain[4],0,0,256,256,190,255,50,50);

            break;
        case 11:

            cxt.drawImage(imgMain[4],0,0,256,256,170,300,50,50);

            break;
        case 12:

            cxt.drawImage(imgMain[4],0,0,256,256,220,350,50,50);

            break;
        case 13:

            cxt.drawImage(imgMain[4],0,0,256,256,180,345,50,50);

            break;
        case 14:

            cxt.drawImage(imgMain[4],0,0,256,256,160,400,50,50);

            break;
        case 15:

            cxt.drawImage(imgMain[4],0,0,256,256,230,400,50,50);

            break;
        case 16:

            cxt.drawImage(imgMain[4],0,0,256,256,150,470,50,50);

            break;
        case 17:

            cxt.drawImage(imgMain[4],0,0,256,256,200,500,50,50);

            break;
        case 18:

            cxt.drawImage(imgMain[4],0,0,256,256,230,550,50,50);

            break;
        case 19:

            cxt.drawImage(imgMain[4],0,0,256,256,245,600,50,50);

            break;
        case 20:

            cxt.drawImage(imgMain[4],0,0,256,256,250,530,50,50);

            break;
        case 21:

            cxt.drawImage(imgMain[4],0,0,256,256,270,490,50,50);

            break;
        case 22:

            cxt.drawImage(imgMain[4],0,0,256,256,290,420,50,50);

            break;
        case 23:

            cxt.drawImage(imgMain[4],0,0,256,256,320,370,50,50);

            break;
        case 24:

            cxt.drawImage(imgMain[4],0,0,256,256,350,280,50,50);

            break;
        case 25:

            cxt.drawImage(imgMain[4],0,0,256,256,360,220,50,50);

            break;
        case 26:

            cxt.drawImage(imgMain[4],0,0,256,256,400,130,50,50);

            break;
        case 27:

            cxt.drawImage(imgMain[4],0,0,256,256,400,60,50,50);

            break;
        case 28:

            cxt.drawImage(imgMain[4],0,0,256,256,400,30,50,50);

            break;
        case 29:

            cxt.drawImage(imgMain[4],0,0,256,256,380,0,50,50);

            break;
        case 30:

            cxt.drawImage(imgMain[4],0,0,256,256,370,40,50,50);

            break;
        case 31:
            count[4]=30;

            break;
    }

    for(var i=0;i<5;i++)
    {
        var temp,t;
        temp=i;
        for(var j=i+1;j<5;j++)
        {
            if(count[i]<count[j])
            {
                temp = j;
            }
        }
        t=count[i];
        count[i]=count[temp];
        count[temp]=t;

        t=imgMain[i];
        imgMain[i]=imgMain[temp];
        imgMain[temp]=t;

        t=team[i];
        team[i]=team[temp];
        team[temp]=t;
    }

    document.getElementById("talkBox").innerHTML="";
    for(var i=0;i<5;i++)
    {
        document.getElementById("talkBox").innerHTML+=team[i]+": "+count[i]+"<br>";
    }
}
