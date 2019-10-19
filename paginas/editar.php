<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){
  require __DIR__.'/../vendor/autoload.php';
  $core = new scripta\lib\core();
  $lista = $_GET['id'];
  $lista = $core->pegarLista($lista);
  $items_decode = json_decode($lista['conteudo'], true);
  sort($items_decode);
?>
<div class="text-center">
  <h3>EDITAR LISTA</h3>
  <div class="dropdown-divider"></div>
  <form method="POST" novalidate class="needs-validation">
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
        <input required type="text" class="form-control" name="titulo" value="<?php print_r($lista['titulo']);?>">
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
      <div class="d-flex justify-content-center mt-2" style='display: none !important'>
        <a class="text-white btn btn-danger btn-icon-split mr-2">
          <span class="icon text-white-50">
            <i class="fas fa-trash"></i>
          </span>
          <span class="text">Remover</span>
        </a>
      </div>
    </div>
    <input type="hidden" name="id" value="<?php print_r($_GET['id']);?>">
    <input type="hidden" name="contagem" value="<?php print_r(count($items_decode));?>">
    <input type="hidden" name="operacao" value="editar">
    <div class="d-flex justify-content-center mt-2">
      <a onclick="addItem()" class="cursor-pointer text-white btn btn-success btn-icon-split mr-2">
        <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
        </span>
        <span class="text">Adicionar</span>
      </a>
    </div>
    <div class="items">
<?php
    $index = 1;
    foreach ($items_decode as $chave => $item) {
?>
    <div id="input-<?php print_r($index);?>" class="">
      <h4 class="mt-3"><?php print_r($item[0]);?></h4>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Nome do Item</span>
        </div>
        <input required="" type="text" data-nome="nome" value="<?php print_r($item[0]);?>" class="form-control" name="data[<?php print_r($index);?>][]">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Marca do Item</span>
        </div>
        <input required="" type="text" data-nome="marca" value="<?php print_r($item[1]);?>" class="form-control" name="data[<?php print_r($index);?>][]">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">QTD. do Item&nbsp;&nbsp;</span>
        </div>
        <input required="" type="text" data-nome="quantidade" value="<?php print_r($item[2]);?>" class="form-control numerico" name="data[<?php print_r($index);?>][]">
        <div class="input-group-append">
          <span class="input-group-text">&nbsp;0&nbsp;</span>
        </div>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Preço do Item&nbsp;</span>
        </div>
        <input required="" type="text" data-nome="preco" value="<?php print_r($item[3]);?>" class="form-control validar" name="data[<?php print_r($index);?>][]">
        <div class="input-group-append">
          <span class="input-group-text">R$</span>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <a class="text-white cursor-pointer btn btn-danger btn-icon-split mr-2" onclick="input = $('#input-<?php print_r($index);?>');animateCSS(input, 'fadeOut', function() {input.remove();})">
          <span class="icon text-white-50">
            <i class="fas fa-trash" aria-hidden="true"></i>
          </span>
          <span class="text">Remover</span>
        </a>
      </div>
    </div>
  </div> <!-- Items -->
    
<?php
  $index++;
}
?>
  </form>
  <div class="dropdown-divider"></div>
</div>
<script>
$('.validar').each(function(){
  $(this).val($(this).maskMoney('unmasked')[0])
  $('.validar').on('blur', function () {
    $(this).val($(this).maskMoney('unmasked')[0])
  })
})
$('.numerico').numbersOnly()
$('.validar').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false})
</script>
<?php } ?>