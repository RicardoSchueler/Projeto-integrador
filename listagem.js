$(document).ready(function () {
    $("form").submit(function (event) {

        // Impede o envio normal do formulário
        event.preventDefault();

        //Serializa os valores de controle de formulário enviados
        //para serem enviados ao servidor da Web com a solicitação 
        var formValues = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/listagem',
            data: formValues
        })
        .done(function (data) {
            // enviar mensagem de registro salvo
            $('#result').append("Cadastro efetuado com sucesso!").css("color", "blue");
        })
        .fail(function (msg) {
            // caso a solicitacao de POST tenha falhado
            alert("Falha na solicitação de cadastro." + msg);
        });
    });
});