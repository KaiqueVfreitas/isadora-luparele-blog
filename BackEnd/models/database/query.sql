create database db_blog_isadora_luparele;
use db_blog_isadora_luparele;


create table tb_usuario(
   usuario varchar(30) not null,
   senha_usuario varchar(255) not null
);

create table tb_navbar(
	id_navbar TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    img_logo text,
    txt_log varchar(30),
    item01 varchar (30),
    item02 varchar (30),
    item03 varchar (30),
    item04 varchar (30),
    item05 varchar (30)
);







