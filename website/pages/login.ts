const loginForm = document.getElementById('login-form') as HTMLFormElement;
const loginMessage = document.getElementById('login-message') as HTMLParagraphElement;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = (document.getElementById('login-username') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        loginMessage.textContent = 'Login successful';
        loginMessage.style.color = 'green';
        loginForm.reset();
        location.href = 'myapp.html';
    } else {
        loginMessage.textContent = 'Invalid username or password !';
        loginMessage.style.color = 'red';
    }
 });