<?php
require __DIR__.'/../vendor/autoload.php';
$core = new scripta\lib\core();
$info = $_POST; //Array com todas as informações
$operacao = $info['operacao'];

if($operacao == "enviarLista"){
    $core->enviarLista($info['listas'], $info['uid']);
}elseif($operacao == ""){
    
}