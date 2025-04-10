import { loadnav } from "./shared.js";

let logout_bt = document.querySelector(".logout_icon")
function logout(){
    localStorage.removeItem("profileImage");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isadmin");
    window.location.href = "index.html"
}


logout_bt.addEventListener("click" , logout);

loadnav("acc");
loadProfile();



 
