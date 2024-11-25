$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#enviar').on('click', function() {
    const nome = $('#nome').val().trim()
    const email = $('#email').val().trim()
    const telefone = $('#telefone').val().trim()
    const aceitoTermos = $('#aceito-termos').is(':checked')

    if (nome && email && telefone && aceitoTermos) {
        alert('Usuário cadastrado com sucesso')
    } else {
        alert('Por favor preencha os campos obrigatório para continuar!')
    }
})