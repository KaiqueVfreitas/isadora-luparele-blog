<?php

require_once __DIR__ . '/../models/database/config.php';
require_once __DIR__ . '/../models/NavBarModel.php';

function visualizarNavbar()
{
    $id = $_GET['id_navbar'] ?? null;

    if (!$id) {
        echo json_encode(['erro' => 'ID da navbar não informado']);
        return;
    }

    $model = new NavBarModel($GLOBALS['cmd']);
    $dados = $model->visualizarNavbar((int)$id);

    echo json_encode($dados ?: ['erro' => 'Navbar não encontrada']);
}

function atualizarNavbar()
{
    $id = $_GET['id_navbar'] ?? null;
    $dados = json_decode(file_get_contents('php://input'), true);

    if (!$id || empty($dados)) {
        echo json_encode(['erro' => 'Dados inválidos']);
        return;
    }

    $model = new NavBarModel($GLOBALS['cmd']);
    $resultado = $model->atualizarNavbar((int)$id, $dados);

    echo json_encode(['status' => $resultado ? 'ok' : 'erro']);
}
