<?php
require_once __DIR__ . '/../models/database/config.php';
require_once __DIR__ . '/../models/NavBarModel.php';

class NavBarController {
    private $model;

    public function __construct() {
        $this->model = new NavBarModel($GLOBALS['cmd']);
    }

    public function visualizarNavbar() {
        try {
            $id = $_GET['id_navbar'] ?? null;

            if (!$id) {
                throw new Exception('ID da navbar não informado');
            }

            $dados = $this->model->visualizarNavbar((int)$id);

            if (!$dados) {
                throw new Exception('Navbar não encontrada');
            }

            echo json_encode($dados);
            
        } catch (Exception $e) {
            http_response_code(400);
            echo json_encode(['erro' => $e->getMessage()]);
        }
    }

    public function atualizarNavbar() {
        try {
            $id = $_GET['id_navbar'] ?? null;
            $dados = json_decode(file_get_contents('php://input'), true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new Exception('JSON inválido');
            }

            if (!$id) {
                throw new Exception('ID da navbar não informado');
            }

            if (empty($dados)) {
                throw new Exception('Dados inválidos para atualização');
            }

            $resultado = $this->model->atualizarNavbar((int)$id, $dados);

            echo json_encode([
                'status' => $resultado ? 'ok' : 'erro',
                'mensagem' => $resultado ? 'Atualização realizada com sucesso' : 'Falha na atualização'
            ]);
            
        } catch (Exception $e) {
            http_response_code(400);
            echo json_encode(['erro' => $e->getMessage()]);
        }
    }
}