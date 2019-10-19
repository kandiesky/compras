<?php 
$array_listas = $core->lerListas($usuario['idUsuario']);
$limite = 5;
$index = 0;
if(is_array($array_listas) && count($array_listas) > 0){
    foreach (array_reverse($array_listas) as $lista) {
        if($index < $limite){
        $lista = $core->pegarLista($lista);
        echo "
            <div class='card shadow mb-4'>
                <div class='card-header py-3'>
                    <h6 class='m-0 font-weight-bold text-okt-medium'>{$lista['titulo']}</h6>
                </div>
                <div class='card-body'>
                    <div class='table-responsive'>
                        <table data-title='{$lista['titulo']}' class='table table-bordered' width='100%' cellspacing='0'>
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
        foreach (json_decode($lista['conteudo']) as $item) {
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
                                <td><h5>{$lista['total']}</h5></td>
                            </tr>
                         </tfoot>
                        </table>
                    </div>
                    <div class='d-flex justify-content-end mt-2'>
                        <a href='#' onclick='deletar(1, {$lista['id']})' class='btn btn-danger btn-icon-split mr-2'>
                            <span class='icon text-white-50'>
                                <i class='fas fa-trash'></i>
                            </span>
                            <span class='text'>Deletar Lista</span>
                        </a>
                        <a href='#' onclick='carregar(\"editar\", {$lista['id']})' class='btn btn-okt-light btn-icon-split'>
                            <span class='icon text-white-50'>
                                <i class='fas fa-edit'></i>
                            </span>
                            <span class='text'>Editar Lista</span>
                        </a>
                    </div>
                </div>
            </div>
        ";
        $index++;
        }
    }
}else{
    print_r("
        <div class='card shadow mb-4 justify-content-center align-items-center'>
            <div class='card-header py-3'>
                <h6 class='m-0 font-weight-bold text-okt-medium'>Você ainda não tem listas!</h6>
            </div>
            <div class='card-body'>
            <a href='#' onclick='carregar(\"adicionar\", 0)' class='btn btn-okt-light btn-icon-split'>
                <span class='icon text-white-50'>
                    <i class='fas fa-edit'></i>
                </span>
                <span class='text'>Criar uma lista</span>
            </a>
            </div>
        </div>
    ");
}
