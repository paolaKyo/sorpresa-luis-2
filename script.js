const btnIniciar = document.getElementById("btnIniciar");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalFrase = document.getElementById("modal-frase");
const cerrar = document.getElementById("cerrar");
const final = document.getElementById("final");
const corazones = document.getElementById("corazones");
const musica = document.getElementById("musica");

let contador = 0;
const flores = document.querySelectorAll(".flores img");

btnIniciar.addEventListener("click", () => {
  portada.classList.add("oculto");
  galeria.classList.remove("oculto");
  musica.play().catch(()=>{}); // música al iniciar
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
        lanzarCorazones();
      }, 2000);
    }
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});

function lanzarCorazones() {
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    corazones.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
}
