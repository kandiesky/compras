<?php if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] =='XMLHttpRequest'){?>
<div class="text-center">
    <div class="error mx-auto" data-text="Construção">Construção</div>
    <p class="lead text-gray-800 mb-5">Pagina incompleta</p>
    <p class="text-gray-500 mb-0">Parece que esta função ainda não está pronta...<br>Mas pode deixar, você recebera um aviso quando ela estiver pronta!</p>
    <a onclick="location.reload()" href="#">Voltar</a>
</div>
<?php } ?>