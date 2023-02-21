<?php
$nombre=$_POST["nombre"];
$contrasena=$_POST["contrasena"];

    if($nombre == "pepe" && $contrasena=="hola"){
        echo( $nombre . "con la contraseña ". $contrasena);
    }else{
        echo("Credenciales erroneas");
    }

?>