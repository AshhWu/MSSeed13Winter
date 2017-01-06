<?php
require_once ("config.php");
    class DB{

        private $pdo;


        public
            function __construct()
            {
                try {
                    $this->pdo = new PDO("sqlsrv:server = tcp:".DB_HOST."; Database = ".DB_DATABASE, DB_USER, DB_PASSWORD);
                    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }
                catch (PDOException $e) {
                    print("Error connecting to SQL Server.");
                    die(print_r($e));
                }
            }
        protected
            function getPDO(){
                return $this->pdo;
            }

        public
            function getAllQuestions(){
                $sql = "SELECT *
                        FROM Monopoly";
                $stmt = $this->pdo->query($sql);
                return $stmt->fetchAll(PDO::FETCH_NUM);
            }

        public
            function getAllScores(){
                $sql = "SELECT *
                        FROM Score";
                $stmt = $this->pdo->query($sql);
                return $stmt->fetchAll(PDO::FETCH_NUM);
            }

        public
            function updateScore($team, $score){
                /*$num = (int)$score;
                $sql = "UPDATE Score
                        SET score=" . $num .
                        "WHERE team=" . $team;
                $stmt = $this->pdo->prepare($sql);
                $stmt -> execute();*/
                $pre_sql = "SELECT count(*) FROM Score";
                $stmt = $this->pdo->prepare($pre_sql);
                $stmt -> execute();
                $num_rows =  $stmt -> fetchColumn() + 1;
                return $num_rows;
            }
        public
            function postTeamName($name){
                $pre_sql = "SELECT count(*) FROM Score";
                $stmt = $this->pdo->prepare($pre_sql);
                $stmt -> execute();
                $num_rows =  $stmt -> fetchColumn() + 1;
                $sql = "INSERT INTO Score (team, name, score, time)
                        VALUES ('$num_rows','$name', 0, 0)";
                $stmt = $this->pdo->prepare($sql);
                $stmt -> execute();
                return $num_rows;
            }
        public
            function getTeamName($index){
                $sql = "SELECT name
                        FROM Score
                        WHERE team = ". $index;
                $stmt = $this->pdo->query($sql);
                return $stmt->fetchAll(PDO::FETCH_NUM);
            }
        public
            function deleteAllScores(){
                $sql = "DELETE FROM Score";
                $stmt = $this->pdo->prepare($sql);
                $stmt -> execute();
            }
    }
?>
