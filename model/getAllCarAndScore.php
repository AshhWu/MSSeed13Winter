<?php
/**
 * Created by PhpStorm.
 * User: AllenHsu
 * Date: 2016/12/30
 * Time: 下午 03:57
 */

include_once "connectDB.php";

$_db = new DB();

$result = $_db->getAllScores();

# JSON-encode the response
echo $json_response = json_encode($result, JSON_UNESCAPED_UNICODE);
