create database db_blog_isadora_luparele;
use db_blog_isadora_luparele;


create table tb_usuario(
   id_usuario TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   usuario varchar(20) not null,
   senha_usuario varbinary(20) not null
);



select * from tb_usuario limit 1;

-- VISUALIZAR USUÁRIOS SEM CRIPTOGRAFIA
SELECT 
  usuario, 
  CONVERT(AES_DECRYPT(senha_usuario, 'teste') USING utf8mb4) AS senha_legivel
FROM tb_usuario;


