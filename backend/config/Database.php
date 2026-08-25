<?php

class Database
{
    private $host = "localhost";
    private $dbName = "lafalaise";
    private $username = "root";
    private $password = "";

    public function connect()
    {
        try {

            $conn = new PDO(
                "mysql:host=" . $this->host .
                ";dbname=" . $this->dbName .
                ";charset=utf8mb4",

                $this->username,
                $this->password
            );

            $conn->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            return $conn;

        } catch (PDOException $e) {

            die(json_encode([
                "error" => "Database connection failed",
                "message" => $e->getMessage()
            ]));
        }
    }
}