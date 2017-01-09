<?php
    include_once "connectDB.php";
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $_db = new DB();
    $name = utf8_encode($request->name);
    $N=iconv("UTF-8", "GB2312", $name);
    $result = $_db->postTeamName($N);
    echo $json_response = json_encode($result, JSON_UNESCAPED_UNICODE);
?>
