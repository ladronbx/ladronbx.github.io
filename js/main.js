// Declaro botonoes
const aButton = document.getElementById('aButton');
const bButton = document.getElementById('bButton');
const yButton = document.getElementById('yButton');
const xButton = document.getElementById('xButton');
const offOn = document.getElementById('offOn');
const upVol = document.getElementById('upVol');
const downVol = document.getElementById('downVol');

// Videos
const animal = document.getElementById('videoAnimal');
const zelda = document.getElementById('videoZelda');
const intro = document.getElementById('videoIntro');
const pokemon = document.getElementById('videoPokemon');

// Elemento de audio para la melodía
const melodyAudio = document.getElementById('melodyAudio');

// Volumen de la melodía
let melodyVolume = 1.0;

// z-index
let i = 0;

// Variable para rastrear si la pantalla está encendida o apagada
const screenBlack = document.getElementById('screenBlack');
let pantallaEncendida = false;

// Función para apagar la pantalla y deshabilitar los botones
function apagarPantalla() {
  pantallaEncendida = false;
  screenBlack.style.display = 'block'; 
  screenBlack.style.zIndex = '999';
  aButton.disabled = true;
  bButton.disabled = true; 
  yButton.disabled = true; 
  xButton.disabled = true; 
  upVol.disabled = true; 
  downVol.disabled = true; 
  
  animal.pause();
  zelda.pause();
  intro.pause();
  pokemon.pause();
  melodyAudio.pause();
}

// Función para encender la pantalla y habilitar los botones
function encenderPantalla() {
  pantallaEncendida = true;
  screenBlack.style.display = 'none';
  aButton.disabled = false;
  bButton.disabled = false;
  yButton.disabled = false;
  xButton.disabled = false; 
  upVol.disabled = false;
  downVol.disabled = false;
  
  restartVideo(animal);
  melodyAudio.play();
}

offOn.addEventListener('click', () => {
  if (pantallaEncendida) {
    apagarPantalla();
  } else {
    encenderPantalla();
  }
});


aButton.addEventListener('click', () => {
  if (pantallaEncendida) {
    restartVideo(zelda);
    i++;
    zelda.style.zIndex = i.toString();
  }
});

bButton.addEventListener('click', () => {
  if (pantallaEncendida) {
    restartVideo(intro);
    i++;
    intro.style.zIndex = i.toString();
  }
});

yButton.addEventListener('click', () => {
  if (pantallaEncendida) {
    restartVideo(animal);
    i++;
    animal.style.zIndex = i.toString();
  }
});

xButton.addEventListener('click', () => {
  if (pantallaEncendida) {
    restartVideo(pokemon);
    i++;
    pokemon.style.zIndex = i.toString();
  }
});

upVol.addEventListener('click', () => {
  if (pantallaEncendida) {
    melodyVolume = Math.min(1.0, melodyVolume + 0.1);
    melodyAudio.volume = melodyVolume;
  }
});

downVol.addEventListener('click', () => {
  if (pantallaEncendida) {
    melodyVolume = Math.max(0.0, melodyVolume - 0.1);
    melodyAudio.volume = melodyVolume;
  }
});

function restartVideo(videoElement) {
  videoElement.currentTime = 0;
  videoElement.play();
}

const leftJoyCon = document.getElementById('leftJoyCon');
const rightJoyCon = document.getElementById('rightJoyCon');
const mounting = document.getElementById('mounting');
const containerMain = document.getElementById('containerMain')

let eventCount = 0;

containerMain.addEventListener('click', () => {
  eventCount++;

  switch (eventCount) {
    case 1:
      leftJoyCon.style.transform = 'translateY(-13em)';
      rightJoyCon.style.transform = 'translateY(-13em)';
      mounting.style.transform = 'translateY(13em)';
      break;
    case 2:
      leftJoyCon.style.transform = 'translateY(-13em) translateX(45em)' ;
      rightJoyCon.style.transform = 'translateY(-13em)  translateX(5em)';
      mounting.style.transform = 'translateY(13em) translateX(-15em)';
      break;
    case 3:
      leftJoyCon.style.transform = 'translateY(-13em)';
      rightJoyCon.style.transform = 'translateY(-13em)';
      mounting.style.transform = 'translateY(13em)';
      break;
    case 4:
      leftJoyCon.style.transform = 'translateX(0)';
      rightJoyCon.style.transform = 'translateX(0)';
      mounting.style.transform = 'translateY(0)';
      break;
    default:
      leftJoyCon.style.transform = 'translateY(0)';
      rightJoyCon.style.transform = 'translateY(0)';
      mounting.style.transform = 'translateY(0)';
      break;
  }
});

//Animaciones visibles:
const toggleButton = document.getElementById('toggleAnimaciones');
const champiElement = document.querySelector('.champi');
const islaElement = document.querySelector('.isla');
const tuboElement = document.querySelector('.tuberia');
const tubo2Element = document.querySelector('.tuberia2');

toggleButton.addEventListener('click', function () {
  if (champiElement.style.display === 'none') {
    champiElement.style.display = 'block';
    islaElement.style.display = 'block';
    tuboElement.style.display = 'block';
    tubo2Element.style.display = 'block';
  } else {
    champiElement.style.display = 'none';
    islaElement.style.display = 'none';
    tuboElement.style.display = 'none';
    tubo2Element.style.display = 'none';
  }
});
