<?php

$rota = $_GET['rota'] ?? null;

switch ($rota) {
    case 'navbar-visualizar':
        require_once __DIR__ . '/controllers/NavBarController.php';
        visualizarNavbar();
        break;

    case 'navbar-atualizar':
        require_once __DIR__ . '/controllers/NavBarController.php';
        atualizarNavbar();
        break;

    default:
        http_response_code(404);
        echo json_encode(['erro' => 'Rota não encontrada']);
}
