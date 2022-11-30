create database ApiAsp;
use ApiAsp;

create table PRODUCTO (
	IdProducto int primary key identity,
	codigoBarra varchar(50) unique,
	Nombre varchar(50),
	Marca varchar(50),
	Categoria varchar(50),
	Precio decimal(10, 2)
);

create table usuario (
	id_usuario int primary key identity(1000, 5),
	correo varchar(200) not null unique,
	clave varchar(50) not null
);

go
create procedure USP_Listar_Usuarios
as
begin transaction TXT
	select * from usuario;
	if @@ERROR > 0
	begin 
	rollback transaction TXT 
	select 'Hubo un error' as Respuesta 
	end
	else 
	begin 
	commit transaction TXT
	select 'Listado exitoso' as Respuesta
end
go

go
create procedure USP_Obtener1_Usuario
@Id  int
as 
begin transaction xnxx
	select * from usuario where id_usuario = @Id;
	if @@ERROR > 0
	begin 
	rollback transaction xnxx 
	select 'Hubo un error' as Respuesta 
	end
	else 
	begin 
	commit transaction xnxx
	select 'Consulta exitosa' as Respuesta
end
go

go
create procedure USP_Actualizar_Usuario
@Id int,
@correo varchar(200),
@clave varchar(50)
as
begin transaction xnxx_Actualizar
	BEGIN TRY 
		UPDATE usuario set 
		correo = @correo,
		clave = @clave
		where id_usuario=@Id;
		
		commit transaction TX
		select 'Actualización exitosa' as Respuesta
	END TRY
	BEGIN CATCH 
		ROLLBACK transaction TX
		select ERROR_MESSAGE() as Respuesta
	END CATCH
go

go
create procedure USP_Eliminar_Usuario
@Id int
as
begin transaction Borrar
	BEGIN TRY 
		DELETE from usuario where id_usuario = @Id

		commit transaction Borrar
		select 'Eliminado correctamente' as respuesta
	END TRY
	
	BEGIN CATCH
		ROLLBACK transaction Borrar
		select ERROR_MESSAGE() as Respuesta
	END CATCH
go

go 
create procedure USP_Insertar_Usuario
@correo varchar(200),
@clave varchar(50)
as
begin transaction Insertar
	begin try 
		insert into usuario(correo, clave) values ( @correo, @clave);
		commit transaction Insertar
		select 'Ingreso Exitoso' as Respuesta
	end try

	begin catch
		rollback transaction Insertar
		select ERROR_MESSAGE() as Respuesta
	end catch
go

INSERT INTO PRODUCTO(CodigoBarra,Nombre,Marca,Categoria,Precio) values
('50910010','Monitor Aoc - Curvo Gaming ','AOC','Tecnologia','1200'),
('50910011','IdeaPad 3i','LENOVO','Tecnologia','1700'),
('50910012','SoyMomo Tablet Lite','SOYMOMO','Tecnologia','300'),
('50910013','Lavadora 21 KG WLA-21','WINIA','ElectroHogar','1749'),
('50910014','Congelador 145 Lt Blanco','ELECTROLUX','ElectroHogar','779'),
('50910015','Cafetera TH-130','THOMAS','ElectroHogar','119'),
('50910016','Reloj análogo Hombre 058','GUESS','Accesorios','699'),
('50910017','Billetera de Cuero Mujer Sophie','REYES','Accesorios','270'),
('50910018','Bufanda Rec Mango Mujer','MANGO','Accesorios','169.90'),
('50910019','Sofá Continental 3 Cuerpos','MICA','Muebles','1299'),
('50910020','Futón New Elina 3 Cuerpos','MICA','Muebles','1349'),
('50910021','Mesa Comedor Volterra 6 Sillas','TUHOME','Muebles','624.12')

go
create procedure USP_Listar_Producto
as
begin transaction TXT
	select * from PRODUCTO;
	if @@ERROR > 0
	begin 
	rollback transaction TXT 
	select 'Hubo un error' as Respuesta 
	end
	else 
	begin 
	commit transaction TXT
	select 'Listado exitoso' as Respuesta
end
go

go
create procedure USP_Obtener1_Producto
@Id  int
as 
begin transaction xnxx
	select * from PRODUCTO where IdProducto = @Id;
	if @@ERROR > 0
	begin 
	rollback transaction xnxx 
	select 'Hubo un error' as Respuesta 
	end
	else 
	begin 
	commit transaction xnxx
	select 'Consulta exitosa' as Respuesta
end
go

go
create procedure USP_Actualizar_Producto
@Id int,
@CodigoBarra varchar (50),
@Nombre varchar (50),
@Marca varchar (50),
@Categoria varchar (50),
@Precio decimal (10,2)
as
begin transaction xnxx_Actualizar
	BEGIN TRY 
		UPDATE PRODUCTO set 
		codigoBarra =ISNULL(@CodigoBarra,codigoBarra),
		Nombre=ISNULL(@Nombre,Nombre),
		Marca=ISNULL(@Marca,Marca),
		Categoria=ISNULL(@Categoria,Categoria),
		Precio=ISNULL(@Precio,Precio)
		where IdProducto=@Id;
		
		commit transaction xnxx_Actualizar
		select 'Actualización exitosa' as Respuesta
	END TRY
	BEGIN CATCH 
		ROLLBACK transaction xnxx_Actualizar
		select ERROR_MESSAGE() as Respuesta
	END CATCH
go

go
create procedure USP_Eliminar_Producto 
@Id int
as
begin transaction Borrar
	BEGIN TRY 
		DELETE from PRODUCTO where IdProducto = @Id

		commit transaction Borrar
		select 'Eliminado correctamente' as respuesta
	END TRY
	
	BEGIN CATCH
		ROLLBACK transaction Borrar
		select ERROR_MESSAGE() as Respuesta
	END CATCH
go

go 
create procedure USP_Insertar_Producto
@CodigoBarra varchar (50),
@Nombre varchar (50),
@Marca varchar (50),
@Categoria varchar (50),
@Precio decimal (10,2)
as
begin transaction Insertar
	begin try 
		insert into PRODUCTO(codigoBarra, Nombre, Marca, Categoria, Precio) values ( @CodigoBarra,@Nombre, @Marca, @Categoria, @Precio);
		commit transaction Insertar
		select 'Ingreso Exitoso' as Respuesta
	end try

	begin catch
		rollback transaction Insertar
		select ERROR_MESSAGE() as Respuesta
	end catch
go

execute USP_Insertar_Producto '50910022','Mesa Comedor Volterra 4 Sillas','TUHOUSE','Mueblesito','324.12';
execute USP_Listar_Producto;
execute USP_Actualizar_Producto 1, '50910010','Mesa Comedor Volterra 2 Sillas','TUHOMESITO','Mueblesitito','124.12';
execute USP_Eliminar_Producto 2;