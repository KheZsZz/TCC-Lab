# create database laboratorios;
use laboratorios;

# Informação necessarias pegar da secretaria...
create table ETEC(
	CNPJ char(19) primary key ,
	razão_social varchar(45)
);

create table usuarios (
	nome varchar(45),
	CPF char(15) not null primary key,
	RG char(10) not null,
	endereco varchar(45) not null,
	telefone varchar(15)
);

create table disciplinas(
	sigla varchar(5) primary key,
    nome varchar(45) ,
	curso varchar(45) not null,
    peoriodo varchar(20),
    semestre int
);

create table professores (
	rm int primary key not null,
	cpf char(15) not null,
	cordenador boolean,
    disciplina varchar(5)
);
alter table professores add constraint cpf foreign key (cpf) references usuarios (CPF);
alter table professores add constraint disciplina foreign key (disciplina) references disciplinas (sigla);

create view cordenadores as 
select nome, rm, cpf from professores where cordenador = true 
union select telefone from usuarios where usuarios.CPF = professores.cpf order by nome;

create table alunos(
	RM int primary key not null,
	cpf char(15) not null
);
alter table alunos add constraint cpf foreign key (cpf) references usuarios (CPF);

create table corpo_docente(
	RM int primary key,
	cpf char(15) not null,
    peoriodo varchar (20)
);
alter table corpo_docente add constraint cpf foreign key (cpf) references usuarios (CPF);

create table almoxarifado(
	rm int not null primary key,
	cpf char(15) not null
);
alter table almoxarifado add constraint cpf foreign key (cpf) references usuarios (CPF);



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
	nome varchar(45) not null,
    observações text
);

create table estoque(
	entrada varchar(45) not null,
	retirada varchar(45),
    produto int,
    responsavel int
);
alter table estoque add constraint responsavel foreign key (responsavel) references almoxarifado (rm);
alter table estoque add constraint produto foreign key (produto) references almoxarifado (num_serie);

create view qtd_total as
select nome, count(nome) from patrimonios;

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
