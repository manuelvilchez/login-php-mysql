<?php 
header("Location:../index.php");
include 'config.php';
$nombre=$_POST['nombre'];
 $apellido=$_POST['apellido'];
 $usuario=$_POST['usuario'];
 $email=$_POST['email'];
 $contrasena=$_POST['contrasena'];
/*
function buscarRepetido($user,$email){*/
	$validacion_usuario="SELECT * FROM usuario WHERE usuario='$usuario'";
	$resultado=mysqli_query($conexion,$validacion_usuario);
	
	$validacion_email="SELECT * FROM usuario WHERE email='$email'";
	$resultado2=mysqli_query($conexion,$validacion_email);
	if (mysqli_num_rows($resultado)>0) {
		 $miresultado=1;
	}else

	if (mysqli_num_rows($resultado2)) {
		 $miresultado=2;
	
	}
	else
	{
		$solicitud="INSERT INTO usuario (usuario, nombre, apellido, email, contrasena) VALUES ('$usuario','$nombre','$apellido','$email','$contrasena')";
		$insertar=mysqli_query($conexion,$solicitud);
		 $miresultado=3;
	}

 

echo $miresultado;





 ?>