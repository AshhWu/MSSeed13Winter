<?php
    include_once "connectDB.php";
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $_db = new DB();
    echo $request->name;
    echo $request->score;
    $_db->updateScore($request->name, $request->score);
?>
