<?php
require_once __DIR__ . '/database/config.php';

class UsuariosModel {
    private $conexao;

    public function __construct($conexao) {
        $this->conexao = $conexao;
    }

    public function autenticar($email, $senha) {
        // Implemente sua lógica de autenticação aqui
        // Exemplo básico:
        $sql = "SELECT * FROM tb_usuario WHERE email = :email";
        $stmt = $this->conexao->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($usuario && password_verify($senha, $usuario['senha_usuario'])) {
            return $usuario;
        }
        
        return false;
    }

    public function validarCampos($usuario, $senha) {
        if (empty($usuario) || empty($senha)) {
            throw new Exception("Erro: Preencha todos os campos.");
        }

        if (strlen($usuario) < 8 || strlen($usuario) > 20) {
            throw new Exception("Erro: O nome de usuário deve ter entre 8 e 20 caracteres.");
        }

        if (strlen($senha) < 8 || strlen($senha) > 20) {
            throw new Exception("Erro: A senha deve ter entre 8 e 20 caracteres.");
        }
    }

    public function criarUsuario($usuario, $senha) {
        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

        $sql = "INSERT INTO tb_usuario (usuario, senha_usuario) 
                VALUES (:usuario, :senha)";
        $stmt = $this->conexao->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':senha', $senhaHash);

        return $stmt->execute();
    }
}