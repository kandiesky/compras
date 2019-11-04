<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
  session_start();
  $usuario = $_SESSION['compras'];
  require __DIR__.'/../vendor/autoload.php';
  $core = new scripta\lib\core();
  $array_listas = $core->lerListas($usuario['idUsuario']);

  ?>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css" rel="stylesheet" />
<div class="text-center">
  <h3>ADICIONAR NOVA CONTA</h3>
  <button type="button" class="btn btn-info btn-icon-split mr-2" data-toggle="modal" data-target="#infoModelo">
    <span class="icon text-white-50">
      <i class="fas fa-info-circle"></i>
    </span>
    <span class="text">AJUDA</span>
  </button>
  <div class="dropdown-divider"></div>
  <form method="POST" action="teste.php">
    <div class="d-flex flex-column w-100 justify-content-center mt-2">
      <div>
        <h4>Informações do usuário</h4>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Nome&nbsp;&nbsp;</span>
          </div>
          <input required type="text" name="nome" placeholder="Joãozinho" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp; <i class="fas fa-signature"></i></i></span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</span>
          </div>
          <input required type="text" name="login" placeholder="joaozinho2019" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-user"></i>&nbsp;</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Senha&nbsp;&nbsp;</span>
          </div>
          <input required type="password" name="senha" placeholder="@senhasuperforte2019#"class="form-control numerico">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-lock"></i>&nbsp;</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;</span>
          </div>
          <input required type="email" name="email" placeholder="joaozinho@okituke.com.br" class="form-control validar">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-envelope"></i>  </span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">&nbsp;&nbsp;Local&nbsp;&nbsp;&nbsp;</span>
          </div>
          <input required type="text" name="local" placeholder="Centro - RJ" class="form-control validar">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-map-marker-alt"></i>&nbsp;</span>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Telefone</span>
          </div>
          <input type="tel" pattern="[0-9]{11}" placeholder="21123456789" name="telefone" class="form-control validar">
          <div class="input-group-append">
            <span class="input-group-text">&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp;  </span>
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text mr-1">
              <input type="checkbox" class="cursor-pointer" onclick="$('#anuncios').toggle();" checked name="anuncios">
              <span class="input-group-text ml-3"><i class="fas fa-ad mr-1"></i> Anúncios</span>
            </div>
            <div class="input-group-text ml-1">
              <input type="checkbox" class="cursor-pointer" name="avbn">
              <span class="input-group-text ml-3"><i class="fas fa-users-cog mr-1"></i> AVBN/ANUNCIANTE</span>
            </div>
          </div>
        </div>
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
        <input type="hidden" name="operacao" value="criarConta">
        <button type="submit" class="btn btn-okt-light btn-icon-split mr-2">
          <span class="icon text-white-50">
            <i class="fas fa-save"></i>
          </span>
          <span class="text">Criar Conta</span>
        </button>
      </div>
    </div>
  </form>
  <div class="dropdown-divider"></div>
</div>
<div id="infoModelo" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">INFORMAÇÕES IMPORTANTES SOBRE CRIAÇÃO DE CONTA</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p><strong>ANÚNCIOS: </strong> Se o usuário verá ou não anúncios em formas de listas <i>patrocinadas</i>. Caso opte por deixar marcado, também poderá selecionar umas listas modelo para copiar para o usuário logo na criação.<br>
        Alternativamente, pode enviar para ele depois também. AVISO! Uma vez enviada a cópia da lista, nenhuma modificação que você fizer refletirá na lista do usuário, visto que foi enviada uma CÓPIA para o mesmo.<br>
        <hr>
        <strong>PRIVACIDADE: </strong> Nenhuma das informações postas aqui será usada para venda a terceiros. São meramente formas de autenticar o usuário em caso de um problema, haja a necessidade de mudança de senha ou recuperação da conta.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
<script>
$('#listas').select2({
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