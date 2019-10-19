<?php
if(count($_POST) > 0){
    header('content-type: application/json');
    print_r(json_encode($_POST));
}else{
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TESTE</title>
</head>
<body>
    <form action="teste.php" method="post">
        <input type="checkbox" name="f" id="">
        <input type="text" name="a[]">
        <input type="text" name="a[]">
        <input type="text" name="a[]">
        <input type="text" name="b">
        <input type="text" name="c">
        <input type="text" name="d">
        <input type="text" name="e">
        <button type="submit"></button>
    </form>
</body>
</html>


<!-- foreach ($conteudo as $chave => $item) {
    $filtro = new NumberFormatter('pt_BR', NumberFormatter::CURRENCY);
    $valor = str_replace(',', '.', $item[3]);
    $valor = explode(".", $valor);
    if (count($valor) >= 2){
        $valor_decimal = substr(end($valor), 0, 2);
        $valor = array_slice($valor, 0, -1);
        $valor = implode("", $valor);
        $valor = $valor . "," . $valor_decimal;
    }else{
        $valor[] = ",00";
        $valor = implode("", $valor);
    }
    $valor_filtrado = $filtro->parse($valor);
    $conteudo[$chave][3] =  "R$ ". $valor_filtrado;
    $conteudo[$chave][4] =  $valor_filtrado * $item[2];
} -->
<?php }?>