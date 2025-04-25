document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            // --- Basic Validation (Replace with real authentication later) ---
            const correctUsername = 'admin';
            const correctPassword = 'password';

            if (username === '' || password === '') {
                errorMessage.textContent = 'Username and password are required.';
                return;
            }

            if (username === correctUsername && password === correctPassword) {
                // Successful login: Redirect to portfolio page
                errorMessage.textContent = ''; // Clear any previous errors
                window.location.href = 'portfolio.html';
            } else {
                // Failed login: Show error message
                errorMessage.textContent = 'Invalid username or password.';
                passwordInput.value = ''; // Clear password field for security
                usernameInput.focus(); // Focus back on username
            }
        });
    }
});