<?php
require_once __DIR__ . '/../models/UsuariosModel.php';
require_once __DIR__ . '/../models/database/config.php';

class UsuariosController {
    private $model;

    public function __construct() {
        $this->model = new UsuariosModel($GLOBALS['cmd']);
    }

    public function loginUsuario() {
        try {
            $dados = json_decode(file_get_contents('php://input'), true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new Exception('JSON inválido');
            }

            $email = $dados['email'] ?? '';
            $senha = $dados['senha'] ?? '';

            $usuario = $this->model->autenticar($email, $senha);

            if ($usuario) {
                echo json_encode(['autenticado' => true]);
            } else {
                echo json_encode(['autenticado' => false]);
            }
        } catch (Exception $e) {
            http_response_code(400);
            echo json_encode(['erro' => $e->getMessage()]);
        }
    }
}