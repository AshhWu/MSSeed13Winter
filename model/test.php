<?php
    include_once "connectDB.php";
    echo "start!\n";

    $_db = new DB();
    print_r($_db->getAllScores());
    print_r($_db->getAllQuestions());
?>
