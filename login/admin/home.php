<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="../css/estilo.css">
	<link rel="stylesheet" type="text/css" href="../css/home.css?001">
</head>
<body>
	<?php 
	
session_start();
if (isset($_SESSION['usuario'])) {

?>
<div class="contenido">
	<div>
		<h1 class="bienvenido">"Bienvenido  <?php echo $_SESSION['nombre'] ." ". $_SESSION['apellido'];?></h1> 
	</div>
</div>
	<div class="btnn">
		<a class="salir" href='../php/cerrarsession.php'>Cerrar sesion</a>
	</div>

<?php 

}else
{
	header("Location:../index.php");
}

 ?>
</body>
</html>
