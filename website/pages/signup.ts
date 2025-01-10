// const signupForm = document.getElementById('signup-form') as HTMLFormElement;

// signupForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault();

//     const username = (document.getElementById('signup-username') as HTMLInputElement).value;
//     const password = (document.getElementById('signup-password') as HTMLInputElement).value;

//     if (username && password) {
//         localStorage.setItem(username, password);
//         alert('Sign up successful!');
//         signupForm.reset();
//         location.href = 'myapp.html';
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

import { send } from "../utilities";

let usernameInput = document.getElementById("signup-username")! as HTMLInputElement;
let passwordInput = document.getElementById("signup-password")! as HTMLInputElement;
let signupButton = document.getElementById("signupButton")! as HTMLButtonElement;

signupButton.onclick = function () {
    send("signup", [usernameInput.value, passwordInput.value]);

    location.href = "myapp.html";
}