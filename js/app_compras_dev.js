//jQuery Restrict input
jQuery.fn.numbersOnly = function () {
    $(this).keydown(function (n) {
        var e = n.which || n.keyCode;
        return !(e >= 65 && e <= 90 || e >= 186 && e <= 187 || e >= 191 && e <= 222) && !n.shiftKey
    })
}
!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/pt-BR",[],function(){return{errorLoading:function(){return"Os resultados não puderam ser carregados."},inputTooLong:function(e){var n=e.input.length-e.maximum,r="Apague "+n+" caracter";return 1!=n&&(r+="es"),r},inputTooShort:function(e){return"Digite "+(e.minimum-e.input.length)+" ou mais caracteres"},loadingMore:function(){return"Carregando mais resultados…"},maximumSelected:function(e){var n="Você só pode selecionar "+e.maximum+" ite";return 1==e.maximum?n+="m":n+="ns",n},noResults:function(){return"Nenhum resultado encontrado"},searching:function(){return"Buscando…"},removeAllItems:function(){return"Remover todos os itens"}}}),e.define,e.require}();

//Docready
$(document).ready(function () {
    // Fecha qualquer menu quando a janela reduz abaixo de 768px 
    $(window).resize(function () {
        if ($(window).width() < 512) {
            $('.sidebar .collapse').collapse('hide');
            $('#aviso').modal();
            $('#funcoes').show();
        }
    });
    if ($(window).width() < 512) {
        $('#aviso').modal();
    }else{
        $('#content, #accordionSidebar, .collapse-fix').on('click', function () {
           $('#collapseTwo, #collapseUtilities').removeClass('show');
        });
    }
    //Data tables
    $('table').DataTable({
        dom: 'B<"clear">lfrtip',
        buttons: ['excel', 'pdf'],
        "info": false,
        lengthChange: false,
        searching: false,
        "ordering": true,
        "language": ptBR,
        "columnDefs": [
            { "orderable": false, "targets": [3, 4]}
        ]
    });
});
//AnimateCSS
function animateCSS(element, animationName, callback) {
    const node = element;
    $(node).addClass('animated ' + animationName);

    function handleAnimationEnd() {
        $(node).removeClass('animated faster ' + animationName)
        if (typeof callback === 'function') callback()
    }
    $(node).one('animationend', handleAnimationEnd);
}
function carregar(pagina = "", id = 0) {
    let promise = 0; //Workaround por causa da natureza async do ajax;
    let callback = function (response) {
        if (promise == 0) {
            setTimeout(() => {
                callback(response);
            }, 50);
        } else {
            content = $('#content');
            $('#carregamento').modal('toggle');
            content.html(response).addClass('d-flex').removeClass('invisible').show(0, function () {
                animateCSS(content, 'rotateIn');
                if(pagina == "listas"){
                    $('table').DataTable({
                        dom: 'B<"clear">lfrtip',
                        buttons: ['pdf'],
                        "info": false,
                        lengthChange: true,
                        "ordering": true,
                        "language": ptBR,
                        columnDefs: [{
                            targets: 3,
                            render: function(a){
                                return a = moment(a).format('l');
                            },
                        }],
                    });
                }else if(pagina == "usuarios"){
                    $('table').DataTable({
                        dom: 'B<"clear">lfrtip',
                        buttons: ['excel'],
                        "info": false,
                        lengthChange: true,
                        "ordering": true,
                        "language": ptBR,
                        columnDefs: [{
                            targets: 7,
                            render: function(a){
                                return a = moment(a).format('l');
                            },
                        }],
                    });
                }else if(pagina == "adicionar" || pagina == "editar"){
                    $('form').off().on("submit", function (e) {
                        e.preventDefault();
                        $.ajax({
                          type: "POST",
                          url: "ajax/funcoesLista.php",
                          dataType: "JSON",
                          data: $('form').serialize(),
                          beforeSend: function () {
                            $('#carregamento').modal();
                          },
                          success: function (response) {
                              setTimeout(() => {
                                  $('#carregamento').modal('hide');
                                    modal = $('#conclusao');
                                    $(modal).find('.resultado-1').text(response["mensagem"])
                                    $(modal).modal();
                              }, 1500);
                          }
                        })
                      })
                }else if(pagina == "conta" || pagina == "perfil"){
                    $('form').off().on("submit", function (e) {
                        e.preventDefault()
                        $.ajax({
                          type: "POST",
                          url: "ajax/funcoesConta.php",
                          dataType: "JSON",
                          data: $('form').serialize(),
                          beforeSend: function () {
                            $('#carregamento').modal();
                          },
                          success: function (response) {
                              setTimeout(() => {
                                  $('#carregamento').modal('hide');
                                    modal = $('#conclusao');
                                    $(modal).find('.resultado-1').text(response["mensagem"])
                                    $(modal).modal();
                              }, 1500);
                          }
                        })
                      })
                }else if(pagina == "anexar"){
                    $('form').off().on("submit", function (e) {
                        e.preventDefault()
                        $.ajax({
                          type: "POST",
                          url: "ajax/extra.php",
                          dataType: "JSON",
                          data: $('form').serialize(),
                          beforeSend: function () {
                            $('#carregamento').modal();
                          },
                          success: function (response) {
                              setTimeout(() => {
                                  $('#carregamento').modal('hide');
                                    modal = $('#conclusao');
                                    $(modal).find('.resultado-1').text(response["mensagem"])
                                    $(modal).modal();
                              }, 1500);
                          }
                        })
                      })
                }
            })
        }
    }
    $.ajax({
        type: "GET",
        url: "paginas/" + pagina + ".php",
        data: {
            'id': id //ID a ser passado para a página
        },
        dataType: "HTML",
        beforeSend: function () {
            content = $('#content');
            $('#carregamento').modal('toggle');
            animateCSS(content, 'rotateOut', function () {
                content.removeClass('d-flex').addClass('invisible').html("").hide(0, function () {
                    promise = 1;
                });
            });
        },
        success: function (response) {
            callback(response);
        },
        complete: function (response, status) {
            if (status != "success") {
                $('#erro').modal();
            }
        }
    });
}

function addItem() {
    let contagem = $('form input[name=contagem]').val();
    let inputs = $('#input-0');
    let clone = inputs.clone();
    inputs.find('input').not("input[type='hidden']").val("");
    contagem++;
    $('form input[name=contagem]').val(contagem);
    let input = $(clone).find('input').toArray();
    input.forEach(input => {
        $(input).attr('name', 'data[' + contagem + '][]');
        if($(input).val() == "" && $(input).attr('data-nome') != "quantidade" && $(input).attr('data-nome') != "preco"){
            $(input).val("...");
        }else if($(input).val() == "" && $(input).attr('data-nome') == "quantidade"){
            $(input).val(0);
        }
    })
    clone.find('h4').addClass('mt-4').text($(input[0]).val());
    clone.find('#opcoes').remove();
    $(clone).find('.validar').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
    clone.find('.d-flex a').on('click', function () {
        input = $("#input-" + contagem);
        animateCSS(input, 'fadeOut', function () {
            input.remove();
        })
    });
    clone.find('.d-flex').show();
    clone.attr("id", "input-" + contagem);
    $('.items').prepend(clone);
    animateCSS(clone, 'fadeIn');
}

function deletar(operacao = 1, data = 0){ //Data = ID ou DOM, referente à operação
    if(operacao == 1){
        modal = $('#confirmacao');
        modal.find('.btn-danger').attr('data-deletar', data).off().attr('data-sair', '0').one('click', function(){
            deletar(2, this);
        });
        $('#confirmacao').find('p').text("Você certeza que deseja fazer isso? Uma vez feito, não terá mais volta.");
        $('#confirmacao').modal('show');
    }else{
        id = $(data).attr('data-deletar');
        $.ajax({
            type: "POST",
            url: "ajax/funcoesLista.php",
            data: {"operacao": "remover", "id": id},
            dataType: "JSON",
            complete: function (response) {
                $('#confirmacao').modal('hide');
                setTimeout(() => {
                    modal =  $('#conclusao');
                    modal.find('.resultado-1').text(response['responseJSON']['mensagem']);
                    modal.modal('show');
                    setTimeout(() => {
                        //location.reload();
                    }, 500);
                }, 500);
            }
        });
    }
}

function sair(operacao = 1, data = 0){ //data = DOM
    if(operacao == 1){
        modal = $('#confirmacao');
        modal.find('.btn-danger').attr('data-sair', 1).off().attr('data-deletar', null).one('click', function(){
            sair(2, this);
        });
        modal.find('p').text("Tem certeza que deseja sair?")
        modal.modal('show');
    }else{
        sair = $(data).attr('data-sair');
        if(sair == 1){
            $.ajax({
                url: "ajax/sair.php",
                dataType: "JSON",
                complete: function (response) {
                    setTimeout(() => {
                        $('#confirmacao').modal('hide');
                        modal =  $('#conclusao');
                        modal.find('.resultado-1').text(response['responseJSON']['mensagem']);
                        modal.modal('show');
                        setTimeout(() => {
                            location.reload();
                        }, 5000);
                    }, 250);
                }
            });
        }
    }
}