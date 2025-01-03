import { send } from "../utilities";

let usernameInput = document.getElementById("usernameInput")! as HTMLInputElement;
let passwordInput = document.getElementById("passwordInput")! as HTMLInputElement;
let signupButton = document.getElementById("signupButton")! as HTMLButtonElement;
let messageDiv = document.getElementById("message")! as HTMLDivElement;

signupButton.onclick = async function () {
    try {
        const response = await send("signup", [usernameInput.value, passwordInput.value]);
        
        messageDiv.textContent = "Signup completed successfully!";
        messageDiv.style.color = "green";
    } catch (error) {
        messageDiv.textContent = "Signup failed. Please try again.";
        messageDiv.style.color = "red";
    }
};
