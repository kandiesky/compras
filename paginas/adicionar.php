<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){?>
<div class="text-center">
  <h3>ADICIONAR NOVA LISTA</h3>
  <div class="dropdown-divider"></div>
  <form method="POST" novalidate>
    <div class="d-flex justify-content-center mt-2">
    <button type="submit" class="btn btn-okt-light btn-icon-split mr-2">
        <span class="icon text-white-50">
          <i class="fas fa-save"></i>
        </span>
        <span class="text">Salvar Lista</span>
      </button>
    </div>
    <div class="input-group mt-3 mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Título da Lista</span>
        </div>
        <input required type="text" class="form-control" name="titulo">
      </div>
    <div class="dropdown-divider"></div>
    <div id="input-0">
      <h4>Adicionar Item</h4>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Nome do Item</span>
        </div>
        <input required type="text" data-nome="nome" class="form-control">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Marca do Item</span>
        </div>
        <input required type="text" data-nome="marca" class="form-control">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">QTD. do Item&nbsp;&nbsp;</span>
        </div>
        <input required type="text" data-nome="quantidade" class="form-control numerico">
        <div class="input-group-append">
          <span class="input-group-text">&nbsp;0&nbsp;</span>
        </div>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Preço do Item&nbsp;</span>
        </div>
        <input required type="text" data-nome="preco" class="form-control validar">
        <div class="input-group-append">
          <span class="input-group-text">R$</span>
        </div>
      </div>
<?php 
      session_start();
      if($_SESSION['compras']['tipoUsuario'] > 0){
?>
      <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text mr-1">
              <input type="checkbox" class="cursor-pointer" onclick="alert('ATENÇÃO! Listas criadas como modelo não podem ser editadas depois de criadas.');" name="anuncios">
              <span class="input-group-text ml-3"><i class="fas fa-ad mr-1"></i> Lista Modelo / Anunciante</span>
            </div>
          </div>
        </div>
<?php
      }
      session_write_close();
?>
      <div class="d-flex justify-content-center mt-2" style='display: none !important'>
        <a class="text-white cursor-pointer btn btn-danger btn-icon-split mr-2">
          <span class="icon text-white-50">
            <i class="fas fa-trash"></i>
          </span>
          <span class="text">Remover</span>
        </a>
      </div>
    </div>
    <input type="hidden" name="contagem" value="0">
    <input type="hidden" name="uid" value="<?php print_r($usuario['idUsuario']);?>">
    <input type="hidden" name="operacao" value="adicionar">
    <div class="d-flex justify-content-center mt-2">
      <a onclick="addItem()" class="text-white cursor-pointer btn btn-success btn-icon-split mr-2">
        <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
        </span>
        <span class="text">Adicionar</span>
      </a>
    </div>
    <div class="items">
    </div> <!-- Items -->
  </form>
  <div class="dropdown-divider"></div>
</div>
<script>
$('.numerico').numbersOnly()
$('.validar').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false})
</script>
<?php } ?>