<?php
    include_once "connectDB.php";
    //$postdata = file_get_contents("php://input");
    //$request = json_decode($postdata);
    $_db = new DB();
    $result = $_db->postTeamName("安安你好嗎");
    //$result = $_db->postTeamName($request->name);
    echo $json_response = json_encode($result, JSON_UNESCAPED_UNICODE);
?>
