<?php 
require __DIR__.'/../vendor/autoload.php'; //Composer
$core = new scripta\lib\core();

if(isset($_POST)){
    if(!isset($_POST['c'])){
        $_POST['c'] = "off";
    }
    $core->logar($_POST['u'], $_POST['s'], $_POST['c']);
}else{
    print_r(json_encode(array('OK' => 1, 'mensagem' => "Erro desconhecido!")));
}
?>