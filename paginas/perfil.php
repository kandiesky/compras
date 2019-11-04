<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
  require __DIR__.'/../vendor/autoload.php';
  $core = new scripta\lib\core();
  if(isset($_GET['id'])){
    $id = $_GET['id'];
  }else{
    session_start();
    $id = $_SESSION['compras']['idUsuario'];
    session_write_close();
  }
  $info = $core->pegarUsuario($id);
  if($info == FALSE){
    header('refresh:0');
    exit;
  }
?>
<div class="text-center">
  <h3>MUDAR INFORMAÇÕES DE CONTA</h3>
  <div class="dropdown-divider"></div>
  <form method="POST" action="conta.php">
    <div class="d-flex flex-column w-100 justify-content-center mt-2">
      <div>
        <h4>Informações do usuário</h4>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Nome&nbsp;&nbsp;</span>
          </div>
          <input required type="text" name="nome" value="<?php print_r($info['nome']);?>" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp; <i class="fas fa-signature"></i></i></span>
          </div>
        </div>
        <small>ATENÇÃO: QUALQUER COISA DIGITADA AQUI FARÁ A SENHA MUDAR. DEIXE EM BRANCO CASO NÃO QUEIRA ISSO.</small>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Senha&nbsp;&nbsp;</span>
          </div>
          
          <input type="password" name="senha" value="" placeholder="Mínimo: 5 dígitos" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-lock"></i>&nbsp;</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;</span>
          </div>
          <input required type="email" name="email" value="<?php print_r($info['email']);?>" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-envelope"></i>  </span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Local&nbsp;&nbsp;&nbsp;</span>
          </div>
          <input type="text" name="local" value="<?php print_r($info['local']);?>" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-map-marker-alt"></i>&nbsp;</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Telefone</span>
          </div>
          <input type="tel" pattern="[0-9]{11}" value="<?php print_r($info['telefone']);?>" name="telefone" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp;  </span>
          </div>
        </div>
        <input type="hidden" name="operacao" value="editarConta">
        <input type="hidden" name="identificacao" value="<?php print_r($id);?>">
        <button type="submit" class="btn btn-okt-light btn-icon-split mr-2">
          <span class="icon text-white-50">
            <i class="fas fa-save"></i>
          </span>
          <span class="text">Salvar Modificações</span>
        </button>
      </div>
    </div>
  </form>
  <div class="dropdown-divider"></div>
</div>
<script>
</script>
<?php } ?>