<?php

//662031201353
require __DIR__.'/vendor/autoload.php';
$core = new scripta\lib\core();
//header('content-type: application/json');
//print_r(json_encode($_POST));
$array = $core->lerListasModelo(1);
$array = array_merge($array, $core->lerListasModelo(1));
print_r($array);

?>
