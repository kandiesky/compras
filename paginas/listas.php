<?php 
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
require __DIR__.'/../vendor/autoload.php';
$core = new scripta\lib\core();
session_start(); 
$usuario = $_SESSION['compras'];
$array_listas = $core->lerListas($usuario['idUsuario']);
$total = count($array_listas);
if(is_array($array_listas) && count($array_listas) > 0){
    echo "
            <div class='card shadow mb-4'>
                <div class='card-header py-3'>
                    <h6 class='m-0 font-weight-bold text-okt-medium'>MINHAS LISTAS</h6>
                </div>
                <div class='card-body'>
                    <div class='table-responsive'>
                        <table data-title='MINHAS LISTAS' class='table table-bordered' width='100%' cellspacing='0'>
                         <thead>
                            <tr>
                                <th>Título</th>
                                <th>Opções</th>
                                <th>Modelo</th>
                                <th>Data</th>
                            </tr>
                         </thead>
                         <tbody>
                            
    ";
    foreach (array_reverse($array_listas) as $lista) {
        $lista = $core->pegarLista($lista);
        if($lista['tipo'] != 0){
            $modelo = "Sim";
            $btn_modelo = "";
        }else{
            $modelo = "Não";
            $btn_modelo = "";
        }
        echo "
                            <tr>
                                <td>{$lista['titulo']}</td>
                                <td>
                                    <div class='d-flex justify-content-center'>
                                        <a href='#' onclick='deletar(1, {$lista['id']})' class='btn btn-danger btn-icon-split mr-1'>
                                            <span class='icon text-white-50'>
                                                <i class='fas fa-trash'></i>
                                            </span>
                                            <span class='text'>Deletar</span>
                                        </a>
                                        <a href='#' onclick='carregar(\"editar\", {$lista['id']})' class='btn btn-okt-light btn-icon-split'>
                                            <span class='icon text-white-50'>
                                                <i class='fas fa-edit'></i>
                                            </span>
                                            <span class='text'>Editar</span>
                                        </a>
                                    </div>
                                </td>
                                <td>{$modelo}</td>
                                <td>{$lista['data']}</td>
                            </tr>
        ";
        }
        echo " 
                </tbody>
                <tfoot class='text-right'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><h5><strong>TOTAL DE LISTAS:</strong></h5></td>
                        <td><h5>{$total}</h5></td>
                    </tr>
                </tfoot>
                </table>
                    </div>
                </div>
            </div>
        ";
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
}
