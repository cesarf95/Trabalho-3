document.addEventListener("DOMContentLoaded", () => {
    // 1. O código começa esperando que todo o conteúdo HTML (DOM) seja carregado.
    // Isso garante que os elementos (como o loader e o formulário) existam antes de o script tentar acessá-los.

    const loader = document.getElementById("loader");
    // 2. Cria uma variável 'loader' que referencia o elemento DIV da tela de login/loader (pelo ID).
    const loginForm = document.getElementById("login-form");
    // 3. Cria uma variável 'loginForm' que referencia o formulário de login (pelo ID).

    const usernameInput = document.getElementById("username");
    // 4. Referencia o campo de entrada (input) do nome de usuário.
    const passwordInput = document.getElementById("password");
    // 5. Referencia o campo de entrada (input) da senha.
    const errorMsg = document.getElementById("login-error");
    // 6. Referencia o parágrafo onde as mensagens de erro de login serão exibidas.

    const toggleButton = document.getElementById("toggle-future-mode");
    // 7. Referencia o botão que ativa/desativa o "Modo Energia".
    const body = document.body;
    // 8. Referencia o elemento <body> do documento, usado para aplicar a classe do modo futurista.

    const FUTURE_MODE_CLASS = "future-mode";
    // 9. Constante que armazena o nome da classe CSS que define o estilo futurista (tema).
    const TEXT_ON = "Desativar Modo Energia";
    // 10. Constante para o texto do botão quando o modo futurista estiver ATIVO.
    const TEXT_OFF = "💡Modo Energia💡";
    // 11. Constante para o texto do botão quando o modo futurista estiver DESATIVADO.


    // =============================
    // LOGIN REAL (admin / 1234)
    // =============================
    // 12. Seção que define a lógica de autenticação.
    loginForm.addEventListener("submit", (event) => {
        // 13. Adiciona um "ouvinte de evento" (event listener) que espera o formulário ser enviado.
        event.preventDefault();
        // 14. IMPEDE o comportamento padrão do formulário (que seria recarregar a página), permitindo o controle via JavaScript.

        const user = usernameInput.value.trim();
        // 15. Pega o valor digitado no campo de usuário e remove espaços em branco extras (trim).
        const pass = passwordInput.value.trim();
        // 16. Pega o valor digitado no campo de senha e remove espaços em branco extras (trim).

        if (user === "" || pass === "") {
            // 17. Verifica se o usuário ou a senha estão vazios (mesmo após o 'required' do HTML, é uma boa prática).
            errorMsg.textContent = "Coloque seu usuário e senha.";
            // 18. Define a mensagem de erro.
            return;
            // 19. Para a execução da função aqui se houver campos vazios.
        }

        if (user === "admin" && pass === "1234") {
            // 20. LÓGICA DE LOGIN: Verifica se o usuário é "admin" E a senha é "1234" (credenciais fixas).
            errorMsg.textContent = "";
            // 21. Limpa qualquer mensagem de erro anterior.

            loader.classList.add("loader-hide");
            // 22. Adiciona a classe 'loader-hide' ao contêiner de login. O CSS deve ter uma regra para esconder (ex: opacity: 0; visibility: hidden;) ou animar o desaparecimento.
            document.body.style.overflow = "auto"; // libera rolagem
            // 23. Altera o CSS do corpo da página diretamente via JS para liberar a barra de rolagem, que provavelmente estava bloqueada durante o login.
        } else {
            // 24. Se as credenciais NÃO coincidirem.
            errorMsg.textContent = "Usuário ou senha incorretos.";
            // 25. Exibe a mensagem de erro.
        }
    });


    // =============================
    // BOTÃO MODO ENERGIA
    // =============================
    // 26. Seção que controla a alternância do tema/modo de energia.
    toggleButton.addEventListener("click", () => {
        // 27. Adiciona um "ouvinte de evento" que espera pelo clique no botão.

        body.classList.toggle(FUTURE_MODE_CLASS);
        // 28. Alterna a classe 'future-mode' no elemento <body>. Se a classe existir, ela é removida; se não existir, é adicionada. Esta classe muda o tema via CSS.

        // Altera texto do botão
        // 29. Início da lógica para mudar o texto do botão de acordo com o estado do modo.
        toggleButton.textContent = 
            // 30. Define o novo texto do botão.
            body.classList.contains(FUTURE_MODE_CLASS)
            // 31. TERNÁRIO (condição ? valor_se_verdadeiro : valor_se_falso). Verifica se a classe 'future-mode' está presente no <body>.
            ? TEXT_ON
            // 32. Se for TRUE (o modo está ativo), usa o texto "Desativar Modo Energia".
            : TEXT_OFF;
            // 33. Se for FALSE (o modo está inativo), usa o texto "💡Modo Energia💡".
    });

});
// 34. Fim da função anônima e do listener 'DOMContentLoaded'.