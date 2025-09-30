const btnIniciar = document.getElementById("btnIniciar");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalFrase = document.getElementById("modal-frase");
const cerrar = document.getElementById("cerrar");
const final = document.getElementById("final");
const musica = document.getElementById("musica");

let contador = 0;
const flores = document.querySelectorAll(".flores img");

btnIniciar.addEventListener("click", () => {
  portada.classList.add("oculto");
  galeria.classList.remove("oculto");
  musica.play();
});

flores.forEach((flor, index) => {
  flor.addEventListener("click", () => {
    modalImg.src = flor.src;
    modalFrase.textContent = flor.getAttribute("data-frase");
    modal.classList.remove("oculto");
    contador++;
    if (contador === flores.length) {
      setTimeout(() => {
        galeria.classList.add("oculto");
        final.classList.remove("oculto");
      }, 2000);
    }
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});
