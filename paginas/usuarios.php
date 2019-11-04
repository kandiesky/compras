<?php 
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
require __DIR__.'/../vendor/autoload.php';
$core = new scripta\lib\core();
session_start(); 
$usuario = $_SESSION['compras'];
$array_usuarios = $core->lerUsuarios($usuario['idUsuario']);
$total = count($array_usuarios);
if(is_array($array_usuarios) && count($array_usuarios) > 0){
    echo "
            <div class='card shadow mb-4'>
                <div class='card-header py-3'>
                    <h6 class='m-0 font-weight-bold text-okt-medium'>MINHAS LISTAS</h6>
                </div>
                <div class='card-body'>
                    <div class='table-responsive'>
                        <table data-title='USUARIOS' class='table table-bordered' width='100%' cellspacing='0'>
                         <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Login</th>
                                <th>Email</th>
                                <th>Local</th>
                                <th>Telefone</th>
                                <th>Opções</th>
                                <th>Data de criação</th>
                            </tr>
                         </thead>
                         <tbody>
                            
    ";
    foreach (array_reverse($array_usuarios) as $usuario) {
        echo "
                            <tr>
                                <td>{$usuario['id']}</td>
                                <td>{$usuario['nome']}</td>
                                <td>{$usuario['login']}</td>
                                <td>{$usuario['email']}</td>
                                <td>{$usuario['local']}</td>
                                <td>{$usuario['telefone']}</td>
                                <td>
                                    <div class='d-flex justify-content-center'>
                                        <a href='#' onclick='carregar(\"anexar\", {$usuario['id']})' class='btn btn-info btn-icon-split mr-1'>
                                            <span class='icon text-white-50'>
                                                <i class='fas fa-share'></i>
                                            </span>
                                            <span tittle='Envia uma cópia de lista(s) marcada(s)' class='text'>Enviar Listas</span>
                                        </a>
                                        <a href='#' onclick='carregar(\"perfil\", {$usuario['id']})' class='btn btn-okt-light btn-icon-split'>
                                            <span class='icon text-white-50'>
                                                <i class='fas fa-edit'></i>
                                            </span>
                                            <span class='text'>Editar</span>
                                        </a>
                                    </div>
                                </td>
                                <td>{$usuario['data']}</td>
                            </tr>
        ";
        }
        echo " 
                </tbody>
                <tfoot class='text-right'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><h5><strong>TOTAL DE USUÁRIOS:</strong></h5></td>
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
                <h6 class='m-0 font-weight-bold text-okt-medium'>Você ainda não criou usuários!</h6>
            </div>
            <div class='card-body'>
            <a href='#' onclick='carregar(\"conta\", 0)' class='btn btn-okt-light btn-icon-split'>
                <span class='icon text-white-50'>
                    <i class='fas fa-edit'></i>
                </span>
                <span class='text'>Criar uma conta</span>
            </a>
            </div>
        </div>
    ");
}
}
