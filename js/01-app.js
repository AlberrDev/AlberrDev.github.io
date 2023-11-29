const nav = document.querySelector("#nav");
const abrir = document.querySelector("#menu_open");


abrir.addEventListener("click",cambiarEstado);


function cambiarEstado(e){
    if (nav.classList.contains("nav_visible")) {
        nav.classList.remove("nav_visible")
    } else if (!nav.classList.contains("nav_visible")){
        nav.classList.add("nav_visible")
    }

}