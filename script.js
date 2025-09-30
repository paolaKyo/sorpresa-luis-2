document.getElementById('btnComenzar').addEventListener('click', () => {
  document.getElementById('portada').classList.add('oculto');
  document.getElementById('ramo').classList.remove('oculto');
});

const flores = document.querySelectorAll('.flor');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalFrase = document.getElementById('modal-frase');
const cerrar = document.getElementById('cerrar');
const final = document.getElementById('final');

flores.forEach(flor => {
  flor.addEventListener('click', () => {
    const frase = flor.getAttribute('data-frase');
    if (frase === "GRAN_FINAL") {
      document.getElementById('ramo').classList.add('oculto');
      final.classList.remove('oculto');
    } else {
      modalImg.src = flor.src;
      modalFrase.textContent = frase;
      modal.classList.remove('oculto');
    }
  });
});

cerrar.addEventListener('click', () => {
  modal.classList.add('oculto');
});
