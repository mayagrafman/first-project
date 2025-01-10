
import { send } from "../utilities";

let usernameInput = document.getElementById("login-username")! as HTMLInputElement;
let passwordInput = document.getElementById("login-password")! as HTMLInputElement;
let loginButton = document.getElementById("loginButton")! as HTMLButtonElement;
let loginMessage = document.getElementById("login-message")! as HTMLDivElement;

loginButton.onclick = async function () {

    let [userfound, userId] = await send("login", [usernameInput.value, passwordInput.value]) as [boolean, string];

    console.log("user found:", userfound);

    if (userfound) {
        localStorage.setItem("userId", userId);

        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful!';
        location.href = 'myapp.html';
    } else {
        loginMessage.textContent = 'Invalid username or password!';
        loginMessage.style.color = 'red';
        // location.href = "signup.html";
    }
};

