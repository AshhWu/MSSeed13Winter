/**
 * Created by admin on 2016/12/30.
 */


function getTeamAndScore() {
    var URLs = "../model/getAllCarAndScore.php";//this one
    return $.ajax({
        url: URLs,
        data: null,
        type: "post",
        dataType: "json",//回傳資料用json檔
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                if(data[i][0]=="1") {
                    $(".team-name").html(data[i][1]);
                    $(".team-score").html(data[i][2]);
                    $(".team-time").html(data[i][3]);

                }
            }


        },
        error: function (err) {
            alert(err.responseText);
        }
    });
}