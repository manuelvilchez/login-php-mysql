<?php 
header("Location:../index.php");
$host="localhost";
$usuario="root";
$contra="";
$bdnombre="formulario";

$conexion= mysqli_connect($host,$usuario,$contra,$bdnombre) or die("fallo la conexion");
mysqli_set_charset($conexion,"utf8");
 ?>