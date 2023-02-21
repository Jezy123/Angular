<?php
  $opcionesAccesoBD = array(

    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",

    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,

    PDO::ATTR_PERSISTENT => true

);

$pdo = new PDO(
    'mysql:host=localhost;dbname=EjemploAjax; charset=utf8',
    'root',
    'sa',
    $opcionesAccesoBD
);

$nombre=$_POST["usuario"];
$email=$_POST["correo"];
$sql="insert into Usuario (Nombre ,correo) values('" . $nombre . "','".$email."')";
$pdo->exec($sql);
?>