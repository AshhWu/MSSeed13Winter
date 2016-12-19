<?php
    include_once "connectDB.php";
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $_db = new DB();
    $_db->postTeamName($request->name);
    $result = $_db->getAllScores();
    echo $json_response = json_encode($result);
?>
