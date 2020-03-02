<?php

function getConnection(){
$servername = "localhost";
$username = "root";
$database = "mapa";
$password = "";

try {
    $gbd = new PDO('mysql:dbname='.$database.';host='.$servername, $username, $password,array(\PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

    return $gbd;
} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}

}
?>