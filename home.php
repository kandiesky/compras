<!DOCTYPE html>
<html lang="pt-BR">
<?php 
session_start();
if(!isset($_SESSION['compras']) && !is_int($_SESSION['compras']['idUsuario'])){
    header('location: /okituke/redeokituke/compras/');
    exit; 
}else{
    require __DIR__.'/vendor/autoload.php';
    $core = new scripta\lib\core();
    $usuario = $_SESSION['compras'];
    if(isset($_SESSION['anunciante'])){
        $anunciante = $_SESSION['anunciante'];
        $core->adicionarAnunciante($usuario['idUsuario'], $anunciante);
        unset($_SESSION['anunciante']);
    }
}
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSS -->
    <link rel="stylesheet" href="css/app_compras-1.1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

    <title>Lista de Compras</title>
</head>

<body id="page-top">
    <div id="wrapper">
        <!-- INÍCIO BARRA LATERAL -->
        <ul class="navbar-nav bg-okt sidebar sidebar-dark accordion toggled" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </a>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <a class="nav-link" href="#" onclick="location.reload();">
                    <i class="fas fa-home"></i>
                    <span>INÍCIO</span></a>
            </li>
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                PLATAFORMA
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-list    "></i>
                    <span>LISTAS</span>
                </a>
                <div id="collapseTwo" class="collapse" data-parent="#accordionSidebar">
                    <div class="bg-okt-dark py-2 collapse-inner rounded collapse-fix">
                        <h6 class="collapse-header">OPÇÕES COM LISTAS</h6>
                        <a class="collapse-item" onclick="carregar('adicionar', 0);" href="#">ADICIONAR LISTA</a>
                        <a class="collapse-item" onclick="carregar('listas', 0);" href="#">MINHAS LISTAS</a>
<?php 
            if($usuario['idUsuario'] == 1 || $usuario['tipoUsuario'] > 0){
?>
                    </div>
                </div>
            </li>
<?php
            }
?>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-user-cog"></i>
                    <span>CONTA</span>
                </a>
                <div id="collapseUtilities" class="collapse" data-parent="#accordionSidebar">
                    <div class="bg-okt-dark py-2 collapse-inner rounded collapse-fix">
<?php 
            if($usuario['idUsuario'] == 1 || $usuario['tipoUsuario'] > 0){
?>
                        <h6 class="collapse-header">CLIENTES</h6>
                        <a class="collapse-item" href="#" onclick="carregar('conta', 0)">CRIAR CONTA DE USUÁRIO</a>
                        <a class="collapse-item" href="#" onclick="carregar('usuarios', 0)">TODOS OS MEUS CLIENTES</a>
                        <a class="collapse-item" href="#" onclick="carregar('anexar', 0)">ENVIAR LISTA MODELO PARA CLIENTE</a>
                        <hr class="sidebar-divider">
<?php 
            }
?>
                        <h6 class="collapse-header">MINHA CONTA</h6>
                        <a class="collapse-item" href="#" onclick="carregar('perfil', <?php print_r($usuario['idUsuario']);?>)">MUDAR MINHAS INFORMAÇÕES</a>
                    </div>
                </div>
            </li>
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                AJUSTES
            </div>
            <li class="nav-item">
                <a onclick="carregar('todo', 0)" class="nav-link" href="#">
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    <span>PERSONALIZAR</span></a>
            </li>
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                CONTA
            </div>
            <li class="nav-item">
                <a onclick="sair(1)" class="nav-link" href="#">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>SAIR</span></a>
            </li>
        </ul>
        <!-- FIM DA BARRA LATERAL -->
        <!-- INÍCIO DA PÁGINA (CONTENT-WRAPPER) -->
        <div id="content-wrapper" class="d-flex flex-column align-items-center">
            <div class="vw-100" id="funcoes">
                <div class="card shadow mb-4 border-0">
                    <!-- Card Content - Collapse -->
                    <div class="show bg-okt" id="funcoesNav">
                        <div class="card-body p-1">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand text-white" onclick="location.reload();" href="#">
                                    <i class="fas fa-home"></i>&nbsp;<span>Início</span></a>
                                <button class="navbar-toggler text-white    " type="button" data-toggle="collapse"
                                    data-target="#funcoesNavDrop" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <i class="fas fa-caret-square-down"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="funcoesNavDrop">
                                    <ul class="navbar-nav">
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="carregar('adicionar', 0);"
                                                href="#">
                                                <i class="fas fa-list mr-2"></i>
                                                <span>ADICIONAR LISTA</span>
                                            </a>
                                        </li>
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="carregar('listas', 0);"
                                                href="#">
                                                <i class="fas fa-clipboard-list mr-2"></i>
                                                <span>MINHAS LISTAS</span>
                                            </a>
                                        </li>
                                        <hr class="sidebar-divider">
                                        <hr class="sidebar-divider">
<?php 
            if($usuario['idUsuario'] == 1 || $usuario['tipoUsuario'] > 0){
?>
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="carregar('conta', 0);"
                                                href="#">
                                                <i class="fas fa-user-plus mr-2"></i>
                                                <span>CRIAR CONTA DE USUÁRIO</span>
                                            </a>
                                        </li>
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="carregar('usuarios', 0);"
                                                href="#">
                                                <i class="fas fa-users mr-2"></i>
                                                <span>TODOS OS MEUS USUÁRIOS</span>
                                            </a>
                                        </li>
<?php
            }
?>
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="carregar('perfil', <?php print_r($usuario['idUsuario']);?>);"
                                                href="#">
                                                <i class="fas fa-lock-open mr-2"></i>
                                                <span>MUDAR MINHAS INFORMAÇÕES</span>
                                            </a>
                                        </li>
                                        <hr class="sidebar-divider">
                                        <hr class="sidebar-divider">
                                        <li class="nav-item m-3">
                                            <a class="collapse-item text-white" onclick="sair(1);"
                                                href="#">
                                                <i class="fas fa-sign-out-alt mr-2"></i>
                                                <span>SAIR</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col w-100 mt-3">
                <div id="content" class="d-flex flex-column justify-content-center">
<?php 
                    include('scripta/cards.php');
?>
                </div>
            </div>
            <!-- FIM DA PÁGINA (CONTENT-WRAPPER) -->
            <!-- MODAL DE AVISO -->
            <div id='aviso' class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">AVISO IMPORTANTE</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Algumas das funções da página não estão disponíveis no modo "retrato" de telefones. Se
                                deseja utilizar todas as funções disponíveis, utilize o modo paisagem ou um computador.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button onclick="$('#aviso').modal('hide');$('#aviso').remove();" type="button"
                                class="btn btn-secondary">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FIM DO MODAL DE AVISO -->
            <!-- MODAL DE CARREGAMENTO -->
            <div class="modal fade" id="carregamento" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-body text-center">
                        <img src="../../imagens/p-load.svg" alt="">
                    </div>
                </div>
            </div>
            <!-- FIM DO MODAL DE CARREGAMENTO -->
            <!-- MODAL DE ERRO -->
            <div class="modal fade" id="erro" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">ERRO</h5>
                        </div>
                        <div class="modal-body">
                            <p>Houve um erro em carregar seu pedido.
                                Clique no botão abaixo para recarregar a página ou tente novamente mais tarde.</p>
                        </div>
                        <div class="modal-footer">
                            <button onclick="location.reload();" class="btn btn-okt-light">Recarregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FIM DO MODAL DE ERRO -->
            <!-- MODAL DE CONFIRMAÇÃO -->
            <div class="modal fade" id="confirmacao" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">TEM CERTEZA?</h5>
                        </div>
                        <div class="modal-body">
                            <p>Você certeza que deseja fazer isso? Uma vez feito, não terá mais volta.</p>
                        </div>
                        <div class="modal-footer">
                            <button data-dismiss="modal" class="btn btn-primary">CANCELAR</button>
                            <button class="btn btn-danger">CONFIRMAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FIM DO MODAL DE CONFIRMAÇÃO -->
            <!-- MODAL DE CONCLUSÃO -->
            <div class="modal fade" id="conclusao" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title resultado-0">RESULTADO</h5>
                        </div>
                        <div class="modal-body">
                            <p class="resultado-1"></p>
                        </div>
                        <div class="modal-footer">
                            <button data-dismiss="modal" class="btn btn-primary">FECHAR</button>
                            <button onclick="location.reload();" data-dismiss="modal"
                                class="btn btn-okt-light">CONFIRMAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FIM DO MODAL DE CONCLUSÃO -->
            <!-- jQuery, Bootstrap JS, FontAwesome, 3X dataTables, Script personalizado -->
            <script src="//code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
            <script src="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
            </script>
            <script src="//kit.fontawesome.com/bcd7c66434.js"></script>
            <script type="text/javascript" src="js/pdfmake.min.js">
            </script>
            <script type="text/javascript" src="js/vfs_fonts.js">
            </script>
            <script type="text/javascript" src="js/dataTables.js">
            </script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
            <script src="js/app_compras-1.1.js"></script>
</body>

</html>