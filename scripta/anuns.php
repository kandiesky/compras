<?php
$anunciantes = $core->lerAnunciantes($usuario['idUsuario']);
if( (is_array($anunciantes) || is_object($anunciantes)) && (count($anunciantes) != 0 && !empty($anunciantes)) ){
    $array_listas_anun = array();
    foreach ($anunciantes as $anun) {
        $array_listas_anun = array_merge($array_listas_anun, $core->lerListasModelo($anun));
    }
    if(is_array($array_listas_anun) && count($array_listas_anun) != 0){
        shuffle($array_listas_anun);
        $lista_anun = $core->pegarLista($array_listas_anun[0][0]);
        echo "
        <div class='card shadow mb-4'>
            <div class='card-header py-3'>
                <h6 class='m-0 font-weight-bold text-okt-medium'><i class='fas fa-ad btn-okt-light'></i> {$lista_anun['titulo']}</h6>
            </div>
            <div class='card-body'>
                <div class='table-responsive'>
                    <table data-title='{$lista_anun['titulo']}' class='table table-bordered' width='100%' cellspacing='0'>
                        <thead>
                        <tr>
                            <th>QTD.</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Preço</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
        ";
        foreach (json_decode($lista_anun['conteudo']) as $item) {
                        /**
                         * !!ATENÇÃO!! a ordem dos itens está diferente da ordem da array...
                         * 0 = nome
                         * 1 = marca
                         * 2 = qtd
                         * 3 = preço
                         * 4 = total
                         */
                    echo "
                        <tr>
                            <td><p>  {$item[2]}  </p></td>
                            <td><p>  {$item[0]}  </p></td>
                            <td><p>  {$item[1]}  </p></td>
                            <td><p>  {$item[3]}  </p></td>
                            <td><p>  {$item[4]}  </p></td>
                        </tr>
                    ";
        }
        echo " 
                        </tbody>
                        <tfoot class='text-right'>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h5><strong>TOTAL:</strong></h5></td>
                            <td><h5>{$lista_anun['total']}</h5></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        ";
    }
}