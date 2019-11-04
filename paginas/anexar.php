<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
  session_start();
  $usuario = $_SESSION['compras'];
  session_write_close();
  require __DIR__.'/../vendor/autoload.php';
  $core = new scripta\lib\core();
  $array_usuarios = $core->lerUsuarios($usuario['idUsuario']);
  $array_listas = $core->lerListas($usuario['idUsuario']);

  ?>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css" rel="stylesheet" />
<div class="text-center">
  <h3>ENVIAR LISTA(S) AO USUÁRIO</h3>
  <div class="dropdown-divider"></div>
  <form method="POST" action="teste.php">
    <div class="d-flex flex-column w-100 justify-content-center mt-2">
      <div>
<?php
      if($_GET['id'] == 0){
?> 
        <h4>SELECIONE O USUÁRIO</h4>
        <div id="anuncios" class="input-group text-left mt-3 mb-3">
          <select class="custom-select select2 select2-w-100" id="uid" name="uid">
            
            <?php
               foreach (array_reverse($array_usuarios) as $usuario) {
                echo "<option value='{$usuario['id']}'>{$usuario['nome']} - {$usuario['login']}</option>";
               }
            ?> 
          </select>
        </div>
<?php 
      }else{
        echo "<input type='hidden' name='uid' value='{$_GET['id']}'>";        
      }
?>
        <h4>SELECIONE AS LISTAS [MODELO] DESEJADAS</h4>
        <div id="anuncios" class="input-group mt-3 mb-3">
          <select class="custom-select select2 select2-w-100" id="listas" name="listas[]" multiple="multiple">
            
            <?php
               foreach (array_reverse($array_listas) as $lista) {
                $lista = $core->pegarLista($lista, 1);
                $data = date("d-m-Y", strtotime($lista['data']));
                echo "<option value='{$lista['id']}'>{$lista['titulo']} - {$data}</option>";
               }
            ?> 
          </select>
        </div>
        <input type="hidden" name="operacao" value="enviarLista">
        <button type="submit" class="btn btn-okt-light btn-icon-split mr-2">
          <span class="icon text-white-50">
            <i class="fas fa-save"></i>
          </span>
          <span class="text">Confirmar</span>
        </button>
      </div>
    </div>
  </form>
  <div class="dropdown-divider"></div>
</div>
<script>
$('select').select2({
  theme: "bootstrap",
  width: '100%',
  placeholder: 'Selecione os modelos',
  language: 'pt-BR'
})
$('.select2-w-100').parent()
    .find(".select2-search__field")
    .css("width", "100%")

</script>
<?php } ?>