<?php
session_start();
if(isset($_GET['AD'])){
  $_SESSION['compras']['AD'] = $_GET['AD'];
}
if(isset($_SESSION['compras']) && isset($_SESSION['compras']['idUsuario'])){
  header('location: inicio');
  print_r("Você já está logado..! <a href='inicio'>Clique aqui.</a>");
  exit;
}
?>
<!doctype html>
<html>

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- CSS -->
  <link rel="stylesheet" href="css/login.min.css?v=01">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <title>Lista de Compras | Login</title>
</head>

<body>
  <main class="container-fluid d-flex justify-content-center">
    <form class="form">
      <h3 class="text-center">LISTAS DE COMPRAS</h3>
      <div class="input-group">
        <span class="input-icon text-center">
          <i class="fas fa-user"></i>
        </span>
        <label for="usuario" class="sr-only">Usuário ou Email</label>
        <input name="usuario" type="text" class="form-control" placeholder="Usuário ou Email" required="" autofocus="">
      </div>
      <div class="input-group">
        <span class="input-icon text-center">
          <i class="fas fa-lock"></i>
        </span>
        <label for="senha" class="sr-only">Senha</label>
        <input name="senha" type="password" class="form-control" placeholder="Senha" required="">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input name='lembrar' type="checkbox">
          </div>
          <span class="input-group-text">Lembrar de Mim</span>
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        <span class="load spinner-border spinner-border-sm" style="display: none; vertical-align: initial !important;"
          role="status" aria-hidden="true"></span>
        <span class="load" style="display: none;">Carregando...</span>
        <span class="login">Fazer Login</span>
      </button>
      <br>
      <small onclick="window.location.assign('http:\/\/www.facebook.com/multikombrasilscripta/');"><i
          class="fa fa-copyright"></i> 2019 - MULTIKOMBRASIL / Scripta.</small>
    </form>
  </main>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Bootstrap JS, then FontAwesome -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/bcd7c66434.js"></script>
  <script>
    $(document).ready(function () {
      $('form').on("submit", function (e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "ajax/logar.php",
          dataType: "JSON",
          data: $('form').serialize(),
          beforeSend: function () {
            $('button .login').hide(0, function () {
              $('button .load').show(0);
            });
          },
          success: function (response) {
            $('button .load').hide(0, function () {
              if (response["OK"] != 0) {
                $('button').removeClass('btn-primary').addClass('btn-danger').find('.login').text(
                  response["mensagem"]);
                  $('button .login').show(0);
              } else {
                $('button').removeClass('btn-danger btn-primary').addClass('btn-success').find(
                  '.login').text(response["mensagem"]);
                $('button .login').show(0, function () {
                  setTimeout(() => {
                    location.assign('inicio');
                  }, 2500);
                });
              }
            });
          }
        });
      });
    });
  </script>
</body>

</html>