<?php
    include_once "connectDB.php";
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $_db = new DB();
    $name = utf8_decode($request->name)
    $result = $_db->postTeamName($name);
    echo $json_response = json_encode($result, JSON_UNESCAPED_UNICODE);
?>
