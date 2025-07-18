<?php

$rota = $_GET['rota'] ?? null;

switch ($rota) {
    case 'login':
        require_once __DIR__ . '/controllers/UsuariosController.php';
        $controller = new UsuariosController();
        $controller->loginUsuario();
        break;
    
    case 'navbar-visualizar':
        require_once __DIR__ . '/controllers/NavBarController.php';
        $controller = new NavBarController();
        $controller->visualizarNavbar();
        break;

    case 'navbar-atualizar':
        require_once __DIR__ . '/controllers/NavBarController.php';
        $controller = new NavBarController();
        $controller->atualizarNavbar();
        break;

    default:
        http_response_code(404);
        echo json_encode(['erro' => 'Rota não encontrada']);
}