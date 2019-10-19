<?php 
require __DIR__.'/../vendor/autoload.php'; //Composer
$core = new scripta\lib\core();

if(isset($_POST)){
    $core->sair();
}else{
    print_r(json_encode(array('OK' => 1, 'mensagem' => "Erro desconhecido!")));
}
?>