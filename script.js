const frases = {
  1: "Mi vida estaba en blanco y negro, llegaste y la coloreaste con tu sonrisa y tu luz 💕✨",
  2: "Tú eres mi refugio, mi paz y mi felicidad 🌸💫",
  3: "Desde que llegaste, todo tiene sentido 🌹✨",
  4: "Eres mi razón favorita para sonreír cada día 💖😊",
  5: "No importa dónde, lo importante es contigo 🌍❤️",
  6: "Mi lugar favorito siempre será a tu lado 🌟💞"
};

function mostrarFrase(num) {
  const fraseBox = document.getElementById("frase-box");
  fraseBox.innerHTML = `<p>${frases[num]}</p>`;
  fraseBox.style.display = "block";

  // Si es la última, mostramos el gran final
  if (num === 6) {
    setTimeout(() => {
      document.getElementById("gran-final").style.display = "block";
    }, 1500);
  }
}
