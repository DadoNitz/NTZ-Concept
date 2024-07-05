document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    const staticUsername = 'admin';
    const staticPassword = 'password123';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === staticUsername && password === staticPassword) {
            alert('Login bem-sucedido!');
            // Redirecione para a página desejada após o login
            window.location.href = 'home.html';
        } else {
            errorMessage.classList.remove('d-none');
        }
    });
});
