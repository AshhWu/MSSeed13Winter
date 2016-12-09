<?php
require_once("config.php");
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
                $sql = "UPDATE Score
                        SET score = ". $score .
                        "WHERE team = ". $team;
                $stmt = $this->pdo->prepare($sql);
                $stmt -> execute();
            }
    }
?>