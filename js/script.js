$(document).ready(function() {
    $('#numero-telefone').mask('(00) 00000-0000');
    $('#numero-cpf').mask('000.000.000-00');
    $('#numero-cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true,
            },
            email: {
                email: true,
                required: true,
            },
            numeroTelefone: {
                required: true,
            },
            numeroDoCPF: {
                required: true,
            },
            enderecoCompleto: {
                required: false,
            },
            numeroDoCep: {
                required: true,
            },
        },
        messages: {
            nomeCompleto: 'por vafor, insira o seu nome completo'
        }
    })
});