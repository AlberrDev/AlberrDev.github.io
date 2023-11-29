window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      let ele = document.querySelector(".boton-arriba-contenedor"); 
      ele.classList.add("show");
    } else {
      let ele = document.querySelector(".boton-arriba-contenedor"); 
      ele.classList.remove("show");
    }
  }

let contenedorBoton = document.querySelector(".boton-arriba-contenedor")

contenedorBoton.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })
})
  