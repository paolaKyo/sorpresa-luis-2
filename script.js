document.getElementById("startBtn").addEventListener("click", () => {
  // 1️⃣ Ocultar portada y mostrar galería
  document.getElementById("portada").style.display = "none";
  document.getElementById("galeria").style.display = "block";

  // 2️⃣ Música con fade-in
  const music = document.getElementById("bg-music");
  music.volume = 0;
  music.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }).catch(err => console.log(err));

  // 3️⃣ Mostrar frases letra por letra con destellos
  const frases = document.querySelectorAll('.frase');
  let i = 0;

  function escribirFrase() {
    if (i >= frases.length) return;
    const fraseDiv = frases[i];
    const texto = fraseDiv.getAttribute('data-text');
    fraseDiv.innerHTML = '';
    fraseDiv.style.opacity = 1;
    fraseDiv.style.transform = 'translateY(0)';

    let j = 0;
    function escribirLetra() {
      if (j < texto.length) {
        const span = document.createElement('span');
        span.classList.add('letra');
        span.style.animationDelay = `${j * 0.05}s`;
        span.textContent = texto[j];
        fraseDiv.appendChild(span);
        j++;
        setTimeout(escribirLetra, 50);
      } else {
        i++;
        setTimeout(escribirFrase, 1000);
      }
    }
    escribirLetra();
  }

  escribirFrase();

  // 4️⃣ Generar corazones brillantes
  const heartsContainer = document.getElementById('hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1 + 1.5) + 'em';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.textContent = "💖";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 500); // cada 0.5s aparece un corazón
});
