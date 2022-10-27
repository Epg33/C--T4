create database MusicStore;
use MusicStore;
drop database MusicStore;
create database xde;
use xde;


create table Empleado(
	id_empleado varchar(15) primary key not null,
	nombre_empleado varchar(20) not null,
	ocupacion varchar(20) not null,
	horario_llegada time not null,
	horario_salida time not null,
	costo_guitarra money not null,
	costo_piano money not null,
	costo_bateria money not null,
	salario_empleado float not null,
	compradores_atendidos bigint not null,
	fecha_contratacion date not null
);
 insert into Empleado(id_empleado,nombre_empleado,ocupacion,horario_llegada,horario_salida,costo_guitarra,costo_piano,costo_bateria,salario_empleado,compradores_atendidos,fecha_contratacion) values ('777', 'luis sdfghjklñpe', 'pene', '12:00:00', '06:00:00', 50000, 60000, 70000, 150000, 1800000, '2012-11-24');
go
create procedure USP_registro 
	@id_empleado varchar (15),
	@nombre_empleado varchar (20),
	@ocupacion varchar (20),
	@horario_llegada time,
	@horario_salida time,
	@costo_guitarra money,
	@costo_piano money,
	@costo_bateria money,
	@salario_empleado float,
	@compradores_atendidos bigint,
	@fecha_contratacion date 
as
begin
   insert into Empleado(id_empleado,nombre_empleado,ocupacion,horario_llegada,horario_salida,costo_guitarra,costo_piano,costo_bateria,salario_empleado,compradores_atendidos,fecha_contratacion) values(@id_empleado,@nombre_empleado,@ocupacion,@horario_llegada,@horario_salida, @costo_guitarra,@costo_piano,@costo_bateria,@salario_empleado,@compradores_atendidos,@fecha_contratacion)
end
go

execute USP_registro '123456789123456', 'luis sdfghjklñpe', 'sivbnmigtfrdeswaqsdtg', '12:00:00', '06:00:00', 50000, 60000, 70000, 150000, 1800000, '2012-11-24';

go

create procedure USP_borrar
	@id_empleado varchar(15)
as
begin
	delete from Empleado where id_empleado=@id_empleado;
end
go

execute USP_borrar '123456789123456';

go
create procedure USP_actualizacion 
	@id_empleado varchar (15),
	@nombre_empleado varchar (20),
	@ocupacion varchar (20),
	@horario_llegada time,
	@horario_salida time,
	@costo_guitarra money,
	@costo_piano money,
	@costo_bateria money,
	@salario_empleado float,
	@compradores_atendidos bigint,
	@fecha_contratacion date 
as
begin
   update Empleado set
   nombre_empleado = @nombre_empleado,
   ocupacion = @ocupacion,
   horario_llegada =  @horario_llegada,
   horario_salida = @horario_salida,
   costo_guitarra = @costo_guitarra,
   costo_piano = @costo_piano,
   costo_bateria = @costo_bateria,
   salario_empleado = @salario_empleado,
   compradores_atendidos = @compradores_atendidos,
   fecha_contratacion = @fecha_contratacion
   where id_empleado = @id_empleado;
end
go

execute USP_actualizacion '123456789123456', 'Juan', 'puta', '14:00:00', '08:00:00', 55000, 65000, 75000, 100000, 3800000, '2015-10-22';

go 
create procedure USP_listarUno
	@id_empleado varchar(15)
as
begin
	select * from Empleado where id_empleado=@id_empleado;
end
go

execute USP_listarUno '123456789123456';

go 
create procedure USP_listar
as
begin 
	select * from Empleado;
end
go

execute USP_listar;