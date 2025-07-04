<?php
require_once 'database/config.php';

$usuario = "AdmBlogIsaLuparele";
$senha   = "adm@isaluparele";

function validarCampos($usuario, $senha)
{
    if (empty($usuario) || empty($senha)) {
        exit("Erro: Preencha todos os campos.");
    }

    if (strlen($usuario) < 8 || strlen($usuario) > 20) {
        exit("Erro: O nome de usuário deve ter entre 8 e 20 caracteres.");
    }

    if (strlen($senha) < 8 || strlen($senha) > 20) {
        exit("Erro: A senha deve ter entre 8 e 20 caracteres.");
    }
}

function criarUsuario($conexao, $usuario, $senha)
{
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO tb_usuario (usuario, senha_usuario) 
            VALUES (:usuario, :senha)";
    $stmt = $conexao->prepare($sql);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':senha', $senhaHash);

    if ($stmt->execute()) {
        echo "Usuário criado com sucesso.";
    } else {
        echo "Erro ao criar o usuário.";
    }
}


validarCampos($usuario, $senha);
criarUsuario($cmd, $usuario, $senha);
