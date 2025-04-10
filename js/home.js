import {loadnav , load_profile_pic} from "./shared.js";
let is_admin = localStorage.getItem("isadmin")
let getstart = document.querySelector("#getstart")
let empty_text = document.querySelectorAll(".empty")




function HomeReload(){
    if(!is_admin || is_admin == "") {
        getstart.classList.remove("none")
    }
    else{
        getstart.classList.add("none")
    }
    loadnav("home");
    load_profile_pic();

        
}



window.onload = HomeReload;