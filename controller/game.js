$(document).ready(function(){
    $.ajax({
        url: '../model/connectDB.php',
        data: {action: 'getAllQuestions'},
        type: 'post',
        success: function(output) {
            alert(output);
        }
    });
});
