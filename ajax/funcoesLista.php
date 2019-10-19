<?php
session_start(); 
$usuario = $_SESSION['compras'];
require __DIR__.'/../vendor/autoload.php';
$core = new scripta\lib\core();
$filtro = new NumberFormatter('pt_BR', NumberFormatter::CURRENCY);

$lista = $_POST;
$operacao = $lista['operacao'];

if(isset($lista['id'])){
    $id = $lista['id'];
}else{
    $id = 0;
}

if($usuario['tipoUsuario'] != 0){
    $tipo = 1;
}else{
    $tipo = 0;
}

$total = 0;
if(isset($lista['data'])){
    if(strlen($lista['titulo']) <= 0){
        $titulo = "Lista de Compras";
    }else{
        $titulo = $lista['titulo'];
    };
    $conteudo = $lista['data'];
    foreach ($conteudo as $chave => $item) {
        $valor = $item[3];
        $total += $valor * $item[2];
        $conteudo[$chave][3] =  $filtro->formatCurrency($valor, "BRL");
        $conteudo[$chave][4] =  $filtro->formatCurrency($valor * $item[2], "BRL");
    }
    $total = $filtro->formatCurrency($total, "BRL");
}else{
    $conteudo = null;
    $total = null;
    $titulo = null;
}

$core->Lista($id, $usuario['idUsuario'], array('titulo' => $titulo, 'total' => $total, 'tipo' => $tipo, 'conteudo' => $conteudo), $operacao);
?>