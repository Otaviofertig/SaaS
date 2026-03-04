// 1. Capturamos os elementos do HTML usando os IDs que criamos
const formLogin = document.getElementById('form-login');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const mensagemErro = document.getElementById('erro-senha');

// 2. Adicionamos um "ouvinte" para quando o usuário tentar enviar o formulário
formLogin.addEventListener('submit', function(evento) {
    
    // IMPORTANTE: Isso impede que a página recarregue ao clicar em "Entrar"
    evento.preventDefault();

    // Limpamos qualquer mensagem de erro de tentativas anteriores
    mensagemErro.textContent = '';
    inputSenha.style.borderColor = '';

    // Pegamos o que o usuário digitou
    const emailDigitado = inputEmail.value;
    const senhaDigitada = inputSenha.value;

    // 3. A nossa Validação (Regra de Negócio)
    if (senhaDigitada.length < 8) {
        // Se falhar, mostramos o erro na tela e paramos a execução
        mensagemErro.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        mensagemErro.style.color = 'red';
        inputSenha.style.borderColor = 'red';
        
        return; // O 'return' faz o código parar aqui, ele não avança.
    }

    // 4. Sucesso! Aqui é onde futuramente chamaremos a API em Java
    console.log('Tudo certo! Dados prontos para enviar pro Back-end:');
    console.log('E-mail:', emailDigitado);
    console.log('Senha secreta:', senhaDigitada); // No futuro não daremos console.log na senha!

    alert('Validação passou! Abra o console do navegador (F12) para ver os dados.');

    alert('Login efetuado! Redirecionando para o sistema...');
    window.location.href = 'dashbord.html';
    
    // Exemplo do que faremos depois: fetch('http://localhost:8080/api/login', ...)
});