create database MusicStore;
use MusicStore;

create table Empleado(
	id_empleado varchar(15) primary key not null,
	nombre_empleado varchar(20) not null,
	ocupacion int not null,
	horario_llegada time not null,
	horario_salida time not null,
	costo_guitarra money not null,
	costo_piano money not null,
	costo_bateria money not null,
	salario_empleado float not null,
	compradores_atendidos bigint not null,
	fecha_contratacion date not null
);
go
create procedure USP_registro 
	@id_empleado varchar,
	@nombre_empleado varchar,
	@ocupacion int,
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