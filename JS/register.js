const formCadastro = document.getElementById('form-cadastro');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const inputConfirmaSenha = document.getElementById('confirma-senha');
const mensagemErro = document.getElementById('erro-cadastro');

formCadastro.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o recarregamento da página

    // Limpa erros anteriores
    mensagemErro.textContent = '';
    inputConfirmaSenha.style.borderColor = '';

    const senha = inputSenha.value;
    const confirmaSenha = inputConfirmaSenha.value;

    // Regra 1: Tamanho da senha
    if (senha.length < 8) {
        mensagemErro.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        mensagemErro.style.color = 'red';
        inputSenha.style.borderColor = 'red';
        return;
    }

    // Regra 2: As senhas precisam ser iguais
    if (senha !== confirmaSenha) {
        mensagemErro.textContent = 'As senhas não coincidem. Tente novamente.';
        mensagemErro.style.color = 'red';
        inputConfirmaSenha.style.borderColor = 'red';
        return;
    }

    // Sucesso!
    console.log('Dados prontos para enviar pro Back-end (Java):');
    console.log({
        nome: inputNome.value,
        email: inputEmail.value,
        senha: senha // No futuro enviaremos isso de forma segura
    });

    alert('Cadastro validado com sucesso! Redirecionando para o login...');
    
    // Simula o redirecionamento para a tela de login após o cadastro
    window.location.href = 'index.html';
});