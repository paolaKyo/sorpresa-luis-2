const startBtn = document.getElementById("startBtn");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const music = document.getElementById("bg-music");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalFrase = document.getElementById("modal-frase");
const final = document.getElementById("final");
const heartsContainer = document.getElementById("hearts");

startBtn.addEventListener("click", () => {
  // Fade-out portada
  portada.style.transition = "opacity 1s";
  portada.style.opacity = 0;
  setTimeout(() => {
    portada.style.display = "none";
    galeria.style.display = "block";
    galeria.style.opacity = 0;
    galeria.style.transition = "opacity 1s";
    setTimeout(()=>galeria.style.opacity=1,50);

    // Música con fade-in
    music.volume = 0;
    music.play().then(()=>{
      let vol=0;
      const fade = setInterval(()=>{
        if(vol<1){vol+=0.02; music.volume=vol;}
        else{clearInterval(fade);}
      },200);
    });
  },1000);
});

// Click en flores
const flores = document.querySelectorAll('.flor');
let fraseIndex = 0;

flores.forEach((flor,i)=>{
  flor.addEventListener("click",()=>{
    modal.style.display="flex";
    modalImg.src=flor.src;
    modalFrase.textContent=flor.dataset.frase;
    fraseIndex = i;

    // Si es la última flor, mostrar gran final
    if(i===flores.length-1){
      setTimeout(()=>{
        modal.style.display="none";
        final.style.display="flex";
        music.volume=1; // sube un poco
      },2000);
    }
  });
});

// Cerrar modal al hacer clic en fondo
modal.addEventListener("click",(e)=>{
  if(e.target.classList.contains("modal-fondo")){
    modal.style.display="none";
  }
});

// Corazones flotantes
setInterval(()=>{
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*1+1.5)+"em";
  heart.style.animationDuration=(Math.random()*3+4)+"s";
  heart.textContent="💖";
  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
},500);
