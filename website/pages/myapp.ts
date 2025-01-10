import { send } from "../utilities";

let checkboxes=document.querySelectorAll(".favorite-checkbox") as NodeListOf<HTMLInputElement>;

checkboxes[0].onchange = function() {
    let userId = localStorage.getItem("userId");
    send("addFavorite", [0, userId]);
}