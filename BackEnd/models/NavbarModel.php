<?php

require_once __DIR__ . '/database/config.php';

class NavBarModel
{
    private $conexao;

    public function __construct(PDO $conexao)
    {
        $this->conexao = $conexao;
    }

    // Atualiza apenas os campos enviados
    public function atualizarNavbar(int $id_navbar, array $dados): bool
    {
        if (empty($dados)) return false;

        $campos = [];
        $parametros = [];

        foreach ($dados as $coluna => $valor) {
            $campos[] = "$coluna = :$coluna";
            $parametros[":$coluna"] = $valor;
        }

        $sql = "UPDATE tb_navbar SET " . implode(', ', $campos) . " WHERE id_navbar = :id_navbar";
        $stmt = $this->conexao->prepare($sql);
        $parametros[':id_navbar'] = $id_navbar;

        return $stmt->execute($parametros);
    }

    // Visualiza a navbar por ID
    public function visualizarNavbar(int $id_navbar): ?array
    {
        $sql = "SELECT 
                    img_logo, txt_log,
                    item01, item02, item03, item04, item05
                FROM tb_navbar
                WHERE id_navbar = :id";

        $stmt = $this->conexao->prepare($sql);
        $stmt->bindParam(':id', $id_navbar, PDO::PARAM_INT);
        $stmt->execute();

        $dados = $stmt->fetch(PDO::FETCH_ASSOC);
        return $dados ?: null;
    }
}
