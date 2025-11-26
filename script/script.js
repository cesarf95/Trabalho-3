document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const loginForm = document.getElementById("login-form");

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("login-error");

    const toggleButton = document.getElementById("toggle-future-mode");
    const body = document.body;

    const FUTURE_MODE_CLASS = "future-mode";
    const TEXT_ON = "Desativar Modo Energia";
    const TEXT_OFF = "💡Modo Energia💡";


    // =============================
    // LOGIN REAL (admin / 1234)
    // =============================
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        if (user === "" || pass === "") {
            errorMsg.textContent = "Coloque seu usuário e senha.";
            return;
        }

        if (user === "admin" && pass === "1234") {
            errorMsg.textContent = "";

            loader.classList.add("loader-hide");
            document.body.style.overflow = "auto"; // libera rolagem
        } else {
            errorMsg.textContent = "Usuário ou senha incorretos.";
        }
    });


    // =============================
    // BOTÃO MODO ENERGIA
    // =============================
    toggleButton.addEventListener("click", () => {

        body.classList.toggle(FUTURE_MODE_CLASS);

        // Altera texto do botão
        toggleButton.textContent = 
            body.classList.contains(FUTURE_MODE_CLASS)
            ? TEXT_ON
            : TEXT_OFF;
    });

});
