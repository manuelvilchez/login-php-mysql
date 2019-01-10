DROP DATABASE IF EXISTS formulario;

CREATE DATABASE IF NOT EXISTS formulario;

USE formulario;

CREATE TABLE usuario(
	usuario varchar(20)  PRIMARY KEY,
	nombre varchar(15) NOT NULL,
	apellido varchar(15) NOT NULL,
	email varchar(80) UNIQUE NOT NULL,
	contrasena varchar(32) NOT NULL

);


INSERT INTO usuario (usuario, nombre, apellido, email, contrasena) VALUES ("wilson23", "manuel","vilchez","wmvilchez@gmail.com",123456);
