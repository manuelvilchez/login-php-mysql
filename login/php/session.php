 <?php 
 header("Location:../index.php");
include 'config.php';
 $usuario=$_POST['usuario'];
 $contrasena=$_POST['contrasena'];

 $validacion_usuario="SELECT * FROM usuario WHERE usuario='$usuario'";
 $resultado=mysqli_query($conexion,$validacion_usuario);
 

$solicitud2= "SELECT * FROM usuario WHERE usuario='$usuario' AND contrasena='$contrasena'";


$resultado2 = mysqli_query($conexion,$solicitud2);

if (!mysqli_num_rows($resultado)>0) {
		 $miresultado=1;
	}else
if ($user=mysqli_fetch_assoc($resultado2)) {
	$miresultado=2;
	session_start();
	$_SESSION['usuario']=$user['usuario'];
	$_SESSION['nombre']=$user['nombre'];
	$_SESSION['apellido']=$user['apellido'];
	
}else
{
	$miresultado=3;
}


echo $miresultado;


 ?>