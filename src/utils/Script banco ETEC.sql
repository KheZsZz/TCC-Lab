#create database laboratorios;
use laboratorios;

## Informação necessarias pegar da secretaria...
create table ETEC(
	CNPJ char(19) primary key,
	nome varchar(45)
);

create table usuarios (
	nome varchar(45),
	CPF char(15) not null primary key,
	RG char(10) not null,
	endereco varchar(45) not null,
	telefone varchar(15)
);
create table alunos(
	RM int primary key not null
);
create table corpo_docente(
	RM int primary key
);

create table almoxarifado(
	id	 int primary key not null,
	rm int not null
);

create table disciplinas(
	id int primary key,
	curso varchar(45) not null
);

## sistema laboratorios
create table agendamentos(
	id integer primary key,
	periodo varchar(20) not null default "noturno",
	data_uso date not null,
	aprova_agendamento varchar(45) not null,
	descricao varchar (45) 
);

create table laboratorio(
	id int primary key,
	nome varchar (45) not null,
	tipo varchar (45) not null
);

create table patrimonios(
	cod_patrimonio int,
	num_serie varchar(45) not null primary key,
	marca varchar(45) not null,
	modelo varchar(45) not null,
	cor varchar(20) not null,
	descricao varchar(45)
);

create table estoque(
	entrada varchar(45) not null,
	retirada varchar(45)
);

create table manutencao(
	id int primary key,
	data_manutencao date not null,
	descricao varchar(45)
);

create table armarios(
	numeracao int not null primary key auto_increment,
	data_inicio date not null,
	devolucao date not null,
	valor_aluguel varchar(45) not null
);

create table agendamento_quadra(
	Id int primary key,
	Hora_inicial time not null,
	data_solic date not null,
	hora_final time
);
