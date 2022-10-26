create database MusicStore;
use MusicStore;

create table Store(
	id_store varchar(15) primary key not null,
	numero_empleados int not null,
	horario_apertura time not null,
	horario_cierre time not null,
	costo_guitarra money not null,
	costo_piano money not null,
	costo_bateria money not null,
	salario_empleados float not null,
	visitas bigint not null,
	ubicacion geography not null
);