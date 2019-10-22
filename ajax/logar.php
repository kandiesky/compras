<?php 
require __DIR__.'/../vendor/autoload.php'; //Composer
$core = new scripta\lib\core();

if(isset($_POST)){
    if(!isset($_POST['lembrar'])){
        $_POST['lembrar'] = "off";
    }
    $core->logar(strtolower($_POST['usuario']), $_POST['senha'], $_POST['lembrar']);
}else{
    print_r(json_encode(array('OK' => 1, 'mensagem' => "Erro desconhecido!")));
}
?>