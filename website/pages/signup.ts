import { send } from "../utilities";

let usernameInput = document.getElementById("usernameInput")! as HTMLInputElement;
let passwordInput = document.getElementById("passwordInput")! as HTMLInputElement;
let signupButton = document.getElementById("signupButton")! as HTMLButtonElement;

signupButton.onclick = function () {
    send("signup",[usernameInput.value, passwordInput.value]);
    
}