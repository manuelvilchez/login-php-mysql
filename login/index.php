<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" >
	<link rel="stylesheet" type="text/css" href="css/estilo.css?">
	<title>Login php mysql</title>
</head>
<body>
	<div class="contenedor">

		<div class="contenedor-opciones">
			<input id="opcion_login" class="btn-opciones active" type="button" value="INICIA SESSION">
			<input id="opcion_registrar" class="btn-opciones" type="button" value="REGISTRATE">
		</div>
		<div class="" id="respuesta"></div>
		<div class="contenedor-formularios">
			<!--formulario session-->
			<div class="formulario">
				
				<form id="form_uno" class="form-uno" method="post" >
					<h1 class=".tit">INICIAR SESSION</h1>
					<!--usuario-->
					<span class="error" id="error-usuarios"></span>
					<div class="input-container ">
						<input id="usuarioL" class="input" type="text" name="usuario" placeholder="Usuario" onblur="alfaNumerico(this);" onkeyup="alfaNumerico(this);">
						<i class="fas fa-user fa-lg faw"></i>
					</div>
					<!--fin usuario-->

					<!--contraseña-->
					<span class="error" id="error-contrasenas"></span>
					<div class="input-container">
						<input id="contrasenaL" class="input" type="text" name="contrasena" placeholder="Contraseña" onblur="alfaNumerico(this);" onkeyup="alfaNumerico(this);">
						<i class="fas fa-key fa-lg fa-fw"></i>
					</div>
					<!--fin contraseña-->

					<div class="btn">
						<input id="ingresar" class="" type="button" value="INGRESAR">
					</div>
				</form>
			</div>
			<!--fin formulario session-->

			<!--formulario registrarse-->
			<div class="formulario">
				
				<form id="form_dos" class="form-dos desaparecer" method="post" >
					<h1>CREA UNA CUENTA</h1>
					<!--nombre-->
					<span class="error" id="error-nombre"></span>
					<div class="input-container">
						<input id="nombreR" class="input" type="text" name="nombre" placeholder="Nombre" onblur="soloTexto(this);" onkeyup="soloTexto(this);">
						<i class="fas fa-user-tag fa-lg fa-fw"></i>
					</div>
					<!--fin nombre-->

					<!--apellido-->
					<span class="error" id="error-apellido"></span>
					<div class="input-container">
						<input id="apellidoR" class="input" type="text" name="apellido" placeholder="Apellido" onblur="soloTexto(this);" onkeyup="soloTexto(this);">
						<i class="far fa-surprise fa-lg fa-fw"></i>
					</div>
					<!--fin apellido-->

					<!--usuario-->
					<span class="error" id="error-usuario"></span>
					<div class="input-container">
						<input id="usuarioR" class="input" type="text" name="usuario" placeholder="Usuario" onblur="alfaNumerico(this);" onkeyup="alfaNumerico(this);">
						<i class="fas fa-user fa-lg fa-fw"></i>
					</div>
					<!--fin usuario-->

					<!--email-->
					<span class="error" id="error-email"></span>
					<div class="input-container">
						<input id="emailR" class="input" type="email" name="email" placeholder="Email"  onblur="revisarEmail(this);" onkeyup="revisarEmail(this);" >
						<i class="fas fa-envelope fa-lg fa-fw"></i>
					</div>
					<!--fin email-->

					<!--contraseña-->
					<span class="error" id="error-contrasena"></span>
					<div class="input-container">
						<input id="contrasenaR" class="input" type="text" name="contrasena" placeholder="Contraseña" onblur="alfaNumerico(this);" onkeyup="alfaNumerico(this);">
						<i class="fas fa-key fa-lg fa-fw"></i>
					</div>
					<!--contraseña-->

					<div class="btn">
						<input id="registrarse" class="" type="button" value="REGISTRARME">
					</div>
					
				</form>
			</div>
			<!--fin formulario registrarse-->

		</div>
	</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="js/script.js?001"></script>
</body>
</html>