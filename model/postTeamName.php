<?php
    include_once "connectDB.php";
    $postdata = file_get_contents("php://input");
    $postdata = utf8_encode($postdata);
    $request = json_decode($postdata);
    $_db = new DB();
    $result = $_db->postTeamName($request->name);
    echo $json_response = json_encode($result, JSON_UNESCAPED_UNICODE);
?>
