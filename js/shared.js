export function loadnav(page){
    let is_admin = localStorage.getItem("isadmin")
    let nav = document.querySelector(".nav")

    if(!is_admin || is_admin == "") {
        return;
    }

    if(is_admin == "Admin"){
        nav.innerHTML = ` 
        <div class="logo">
            <h1 class="lets"> LET’S </h1>
            <h1 class="cook"> COOK </h1>
        </div>
        <div class="tabs">
            <a class="${page == "home" ? 'tab choosed_tab' : 'tab'}" id="home" href="./index.html">Home</a>
            <a class="${page == "recipes" ? 'tab choosed_tab' : 'tab'}" id="recipes" href="./Recipes.html">Recipes</a>
            <a class="${page == "myrecipes" ? 'tab choosed_tab' : 'tab'}" id="my_recipes" href="./MyRecipes.html">MyRecipes</a>
            <a class="${page == "add" ? 'tab choosed_tab' : 'tab'}" id="recipes" href="./AddProduct.html">Add Recipe</a>
            <a class="${page == "fav" ? 'tab choosed_tab' : 'tab'}" id="acc" href="./Favourites.html">Favourites</a>
            <a class="${page == "acc" ? 'tab choosed_tab' : 'tab'}" id="acc" href="./account.html">Account</a>
            <div class="search_box">
                <img src="./images/search.png"  class="search_icon">
                <div class="search_tab" id= "admin_search_tab">
                    <input type="text" class="search" placeholder="Search">
                    <div class="search_result_tab">
            
                    </div>
                </div>
            </div>
        </div>
        <div class="profile_image"> </div>
        `
    }
    else{
        nav.innerHTML = ` 
          <h1 class="logo" id="admin_logo"><span class="lets"> LET’S </span> <span class="cook"> COOK </span></h1>
        <div class="tabs">
            <a class="${page == "home" ? 'tab choosed_tab' : 'tab'}"  id="home" href="./index.html">Home</a>
            <a class="${page == "recipes" ? 'tab choosed_tab' : 'tab'}" id="recipes" href="./Recipes.html">Recipes</a>
            <a class="${page == "fav" ? 'tab choosed_tab' : 'tab'}" id="fav_recipes" href="./Favourites.html">Favourite Recipes</a>
            <a class="${page == "acc" ? 'tab choosed_tab' : 'tab'}" id="acc" href="./account.html">Account</a>
            <div class="search_box">
                <img src="./images/search.png"  class="search_icon">
                <div class="search_tab">
                    <input type="text" class="search" placeholder="Search">
                    <div class="search_result_tab">
            
                    </div>
                </div>
            </div>
        </div>
        <div class="profile_image"> </div>
        `  
    }
 
}

export function load_profile_pic(){
    let savedImage = localStorage.getItem("profileImage");
    let profile_image = document.querySelector(".profile_image")
    if(savedImage){
        profile_image.style.backgroundImage = `url('${savedImage}')`;
    }
    profile_image.addEventListener("click",function(){
        window.location.href = "account.html"
    });
}