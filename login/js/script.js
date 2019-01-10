var opcion_login=document.getElementById('opcion_login');
var opcion_registrar=document.getElementById('opcion_registrar');
var form_uno=document.getElementById('form_uno');
var form_dos=document.getElementById('form_dos');

var registrarse=document.getElementById('registrarse');
var ingresar=document.getElementById('ingresar');


/**opciones*/
opcion_login.addEventListener('click',function(){
	opcion_registrar.classList.remove("active");
	opcion_login.classList.add("active");

	form_dos.classList.add("desaparecer");
	form_uno.classList.remove("desaparecer");
});

opcion_registrar.addEventListener('click',function(){
	opcion_login.classList.remove("active");
	opcion_registrar.classList.add("active");

	form_uno.classList.add("desaparecer");
	form_dos.classList.remove("desaparecer");
});

//fin opciones

//
registrarse.addEventListener('click',function(){
	enviarRegistro();
});
ingresar.addEventListener('click',function(){
	enviarSession();
});

//********FUNCIONES
//validar solo texto
function soloTexto(elemento){
	var exp=/^\w+.*$/;	//no permite que valla solo espacios
	
	if (elemento.value=="" || !exp.test(elemento.value)  ) {

		elemento.className='error-input';
		
		

	}else
	if (elemento.value!=="") {
		var data=elemento.value;
		var exp=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		if ( !exp.test(data)){
			elemento.className='error-input';
		}else{
		
		elemento.className='input';
		}
	}

}
//fin validar solo texto

//validar alfanumericos
function alfaNumerico(elemento){
	var exp=/^\w+.*$/;	//no permite que valla solo espacios
	
	if (elemento.value=="" || !exp.test(elemento.value)  ) {

		elemento.className='error-input';
		
		

	}else{
		elemento.className='input';
	}
}
//fin validar alfanumericos

//validar email
function revisarEmail(elemento){
	if (elemento.value!=="") {
		var data=elemento.value;
		var exp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!exp.test(data)) {
			elemento.className='error-input';
		}
		else
		{
			elemento.className='input';
		}
	}
}
//fin validar email
///validar formulario iniciar sesion
function validarFormularioSession(){
	
	var expRegEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var exp=/^\w+.*$/;

	var formulario= document.getElementById("form_uno");
	var usuarioL= document.getElementById("usuarioL");
	var contrasenaL= document.getElementById("contrasenaL");
	
	var errorusuarios=document.getElementById("error-usuarios");
	//var erroremail=document.getElementById("error-email");
	var errorcontrasenas=document.getElementById("error-contrasenas");

	if (!usuarioL.value) 
	{
		//si usuario viene vacio
		usuarioL.className='error-input';
		errorusuarios.innerHTML="*usuario es requerido";
		errorusuarios.style.display='block';
		usuarioL.focus();
		return false;
	}
	else if (!exp.exec(usuarioL.value)) 
	{
		//si usuario viene solo esapcios
		usuarioL.className='error-input';
		errorusuarios.innerHTML="*hay espacios";
		errorusuarios.style.display='block';
		usuarioL.focus();
		return false;
	}
	else if (!contrasenaL.value) 
	{
		contrasenaL.className='error-input';
		errorcontrasenas.innerHTML="*contraseña es requerido";
		errorcontrasenas.style.display='block';
		contrasenaL.focus();
		return false;
	}
	else if (!exp.exec(contrasenaL.value)) 
	{
		errorcontrasenas.innerHTML="*espacio no es valido";
		errorcontrasenas.style.display='block';
		contrasenaL.focus();
		return false;
	}
	
	return true;
	
}

///fin validar formulario iniciar sesion


//validar formulario Registrarse
function validarFormularioRegistrarse(){
	var expRegNombre= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	var expRegEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var exp=/^\w+.*$/;

	var formulario= document.getElementById("form_dos");
	var nombre= document.getElementById("nombreR");
	var apellido= document.getElementById("apellidoR");
	var usuario= document.getElementById("usuarioR");
	var email= document.getElementById("emailR");
	var contrasena= document.getElementById("contrasenaR");
	
	var errornombre=document.getElementById("error-nombre");
	var errorapellido=document.getElementById("error-apellido");
	var errorusuario=document.getElementById("error-usuario");
	var erroremail=document.getElementById("error-email");
	var errorcontrasena=document.getElementById("error-contrasena");
	

	

	if (!nombre.value ) 
	{
		//si viene vacio	
		nombre.className='error-input';
		errornombre.innerHTML="*nombre es requerido ";
		errornombre.style.display='block';

		nombre.focus();
		return false;
		
	}
	else
	 if(!exp.exec(nombre.value))
	{
		//si viene numeros o espacio al inicio
		nombre.className='error-input';
		errornombre.innerHTML="*hay espacios ";
		errornombre.style.display='block';
		nombre.focus();
		return false;
	}
	else if(!expRegNombre.exec(nombre.value) )
	{
		//si viene numeros o espacio al inicio
		nombre.className='error-input';
		errornombre.innerHTML="*El campo nombre solo acepta letras ";
		errornombre.style.display='block';
		nombre.focus();
		return false;
	}
	
	else if (!apellido.value ) 
	{
		//si apellido viene vacio
		apellido.className='error-input';
		errorapellido.innerHTML="*apellido es requerido";
		errorapellido.style.display='block';
		apellido.focus();
		return false;
	}
	else if(!expRegNombre.exec(apellido.value) )
	{
		//si viene numeros o solo espacios
		apellido.className='error-input';
		errorapellido.innerHTML="*El campo apellido solo acepta letras";
		errorapellido.style.display='block';
		apellido.focus();
		return false;
	}
	else if(!exp.exec(apellido.value))
	{	
		nombre.className='error-input';
		errorapellido.innerHTML="*hay espacios";
		errorapellido.style.display='block';
		apellido.focus();
		return false;
	}
	else if (!usuario.value) 
	{
		//si usuario viene vacio
		usuario.className='error-input';
		errorusuario.innerHTML="*usuario es requerido";
		errorusuario.style.display='block';
		usuario.focus();
		return false;
	}
	else if (!exp.exec(usuario.value)) 
	{
		//si usuario viene solo esapcios
		usuario.className='error-input';
		errorusuario.innerHTML="*hay espacios";
		errorusuario.style.display='block';
		usuario.focus();
		return false;
	}
	else if (!email.value)
	{
		//si email viene vacio
		email.className='error-input';
		erroremail.innerHTML="*email es requerido";
		erroremail.style.display='block';
		email.focus();
		return false;
	}

	else if(!expRegEmail.exec(email.value))
	{
		//si email es incorrecto
		email.className='error-input';
		erroremail.innerHTML="*email incorrecto";
		erroremail.style.display='block';
		email.focus();
		return false;
	}
	else if(!exp.exec(email.value))
	{
		//si el campo email viene solo espacios
		email.className='error-input';
		erroremail.innerHTML="*hay espacios";
		erroremail.style.display='block';
		return false;
	}
	
	else if (!contrasena.value) 
	{
		contrasena.className='error-input';
		errorcontrasena.innerHTML="*contraseña es requerido";
		errorcontrasena.style.display='block';
		contrasena.focus();
		return false;
	}
	else if (!exp.exec(contrasena.value)) 
	{
		contrasena.className='error-input';
		errorcontrasena.innerHTML="*espacio no es valido";
		errorcontrasena.style.display='block';
		contrasena.focus();
		return false;
	}
	
	return true;
	
}
//fin validar formulario Registrarse

//enviar ssesion
function enviarSession() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
        if(validarFormularioSession()){                               // Primero validará el formulario.
            $.ajax({
				type:'POST',
				url:'./php/session.php',
				data:$('#form_uno').serialize(),
				beforeSend: function () {
                        $("#respuesta").html("Procesando, espere por favor...");
                },
				success:function(data){
				
                if (data==1) {
                	$("#respuesta").addClass("mensaje");
                	 $("#respuesta").html("el usuario no existe");
                	 $('.error').css('display','none');
                	 $('#error-usuarios').css('display','block');
                	 $("#usuarioL").addClass('error-input');
                	 $("#usuarioL").removeClass('input');
                	 $('#error-usuarios').html('*');
                	 

                	 $("#usuarioL").focus();
                	 
                }else 
                if (data==2) {
                	$("#respuesta").addClass("exitosa");
                	 $("#respuesta").html("operacion exitosa");
                	 $('.error').css('display','none');
                	 $("#form_dos")[0].reset();
                	  location.href ="./admin/home.php";

                	
                }else
                if (data==3) {
                	$("#respuesta").addClass("mensaje");
                	 $("#respuesta").html("contraseña equivocada");
                	 $("#contrasenaL").focus();
                	 $('.error').css('display','none');
                	 $('#error-contrasenas').css('display','block');
                	 $("#contrasenaL").addClass('error-input');
                	 $("#contrasenaL").removeClass('input');
                	 $("#error-contrasenas").html('*');
                }
				}
			});
        }
    };    
//fin enviar session//
//enviar registro//
function enviarRegistro() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
        if(validarFormularioRegistrarse()){                               // Primero validará el formulario.
            $.ajax({
				type:'POST',
				url:'./php/registrarse.php',
				data:$('#form_dos').serialize(),
				beforeSend: function () {
                        $("#respuesta").html("Procesando, espere por favor...");
                },
				success:function(data){
					 /* if(res == 1){
                   $("#siono").html("registrado");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                } else {
                    $("#siono").html("sin exito");      // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                }*/
                if (data==1) {
                	$("#respuesta").addClass("mensaje");
                	 $("#respuesta").html("el usuario ya existe");
                	 $("#usuarioR").focus();
                	 $('#error-usuario').css('display','block');
                	 $("#usuarioR").addClass('error-input');
                	 $("#usuarioR").removeClass('input');
                	 $("#error-usuario").html('*');
                }else 
                if (data==2) {
                	$("#respuesta").addClass("mensaje");
                	 $("#respuesta").html("el correo ya existe");
                	 $("#emailR").focus();
                	  $('#error-email').css('display','block');
                	 $("#emailR").addClass('error-input');
                	 $("#emailR").removeClass('input');
                	 $("#error-email").html('*');
                }else
                if (data==3) {
                	$("#respuesta").addClass("exitosa");
                	 $("#respuesta").html("operacion exitosa");
                	 $('.error').css('display','none');
                	 $("#form_dos")[0].reset();


                }
				}
			});
        }
    };    
//fin enviar registro//
