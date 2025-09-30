function iniciarSorpresa() {
  const frases = [
    { img: "hw1.jpg", texto: "💕✨ Mi vida estaba en blanco y negro, llegaste y la coloreaste con tu sonrisa 💕✨" },
    { img: "hw2.jpg", texto: "Eres mi alegría diaria 💕" },
    { img: "hw3.jpg", texto: "Cada momento contigo es único 🌹" },
    { img: "hw4.jpg", texto: "No hay nadie como tú 💫" },
    { img: "hw5.jpg", texto: "Eres mi razón de sonreír 😍" },
    { img: "hw6.jpg", texto: "Eres mi paraíso en la tierra 🌷" }
  ];
  document.getElementById("startBtn").addEventListener("click", () => {
  // Oculta portada
  document.getElementById("portada").style.display = "none";
  document.getElementById("galeria").style.display = "block";

  // Reproducir música
  const music = document.getElementById("bg-music");
  music.play().catch(err => {
    console.log("El navegador bloqueó el autoplay hasta que hagas clic:", err);
  });
});
document.getElementById("startBtn").addEventListener("click", () => {
  // Oculta portada
  document.getElementById("portada").style.display = "none";
  document.getElementById("galeria").style.display = "block";

  // Reproducir música con fade-in
  const music = document.getElementById("bg-music");
  music.volume = 0; // empieza en silencio
  music.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.02; // sube poco a poco
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200); // cada 200ms aumenta volumen
  }).catch(err => {
    console.log("El navegador necesita interacción del usuario:", err);
  });
});
  let index = 0;
  const container = document.body;
  container.innerHTML = ""; // limpia la pantalla

  function mostrarFrase() {
    if (index < frases.length) {
      container.innerHTML = `
        <div class="pantalla">
          <img src="${frases[index].img}" class="imagen-romantica">
          <h2>${frases[index].texto}</h2>
        </div>
      `;
      index++;
      setTimeout(mostrarFrase, 3000); // pasa cada 3 segundos
    } else {
      container.innerHTML = `
        <div class="final">
          <h1>✨🥹 No quiero existir en un mundo donde no estés ✨🥹</h1>
          <p>Te amo demasiado 😍❤️</p>
          <img src="foto.jpg" class="imagen-romantica">
        </div>
      `;
    }
  }

  mostrarFrase();
}
