<?php
include_once "connectDB.php";

$_db = new DB();

$result = $_db->getAllQuestions();

# JSON-encode the response
echo $json_response = json_encode($result);
?>