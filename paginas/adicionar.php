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
      <div class="input-group" id="opcoes">
          <div class="input-group-prepend">
          <button type="button" class="btn btn-small btn-info" data-toggle="modal" data-target="#infoModelo">
            <i class="fas fa-info-circle"></i>
          </button>
            <div class="input-group-text mr-1">
              <input type="checkbox" class="cursor-pointer" onclick="alert('ATENÇÃO! Listas enviadas para o usuário não estarão mais sobre seu controle. Nenhuma modificação que você fizer afetará a do cliente.');" name="anuncios">
              <span class="input-group-text ml-3"><i class="fas fa-ad mr-1"></i> Lista Modelo / Anunciante</span>
            </div>
          </div>
        </div>
      <div id="infoModelo" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">INFORMAÇÕES SOBRE LISTA "MODELO"</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Uma lista <i>modelo</i> exibe algumas diferenças para a lista comum:<br><br>
              Por exemplo, listas modelo podem ser copiadas para clientes quando você cria contas;<br><br>
              Listas modelo <strong>sempre</strong> serão mostradas para seus clientes, geralmente de forma aleatória;<br><br>
              Quando um cliente vê uma lista modelo, terá um pequeno visual informando para ele que essa lista é um anúncio;<br><br>
              Assim como listas normais, listas modelo também podem ser imprimidas. <small>(Dica: é possível colocar cupons de desconto dentro da lista utilizando valores negativos em um <i>item</i>)</small>;<br><br>
              <strong>Clientes não podem modificar sua lista modelo. Apenas você pode.</strong></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
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