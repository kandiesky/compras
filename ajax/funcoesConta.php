<?php
require __DIR__.'/../vendor/autoload.php';
$core = new scripta\lib\core();

$conta = $_POST; //Array com todas as informações da conta
$conta['login'] = strtolower($conta['login']); //Muda o login para lower case
$conta['email'] = strtolower($conta['email']); //Muda o email para lower case

if(!isset($conta['anuncios'])){
    $conta['anuncios'] = "0";
    $conta['listas'] = null;
}else{
    $conta['anuncios'] = "1";
}
if(!isset($conta['avbn'])){
    $conta['avbn'] = "0";
}else{
    $conta['avbn'] = "1";
}
$operacao = $conta['operacao'];

$core->Conta($conta, $operacao);