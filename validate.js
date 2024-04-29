// Função para validar o formulário
function validarFormulario() {
    // Obtém os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Verifica se algum campo obrigatório está vazio
    if (nome === '' || email === '' || mensagem === '') {
        // Exibe um alerta informando ao usuário para preencher todos os campos obrigatórios
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }
    
    return true; // Permite o envio do formulário se todos os campos estiverem preenchidos
}

