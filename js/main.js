// Botones
const aButton = document.getElementById('aButton');
const bButton = document.getElementById('bButton');
const yButton = document.getElementById('yButton');
const offOn = document.getElementById('offOn');
const upVol = document.getElementById('upVol');
const downVol = document.getElementById('downVol');

// Videos
const animal = document.getElementById('videoAnimal');
const zelda = document.getElementById('videoZelda');
const intro = document.getElementById('videoIntro');

// Elemento de audio para la melodía
const melodyAudio = document.getElementById('melodyAudio');

// Volumen de la melodía
let melodyVolume = 1.0;

// z-index
let i = 0;

offOn.addEventListener('click', () => {
  restartVideo(animal);
  i++;
  animal.style.zIndex = i.toString();
  melodyAudio.play();
});

aButton.addEventListener('click', () => {
  restartVideo(zelda);
  i++;
  zelda.style.zIndex = i.toString();
});

bButton.addEventListener('click', () => {
  restartVideo(intro);
  i++;
  intro.style.zIndex = i.toString();
});

yButton.addEventListener('click', () => {
  restartVideo(zelda);
  i++;
  zelda.style.zIndex = i.toString();
});

upVol.addEventListener('click', () => {
  melodyVolume = Math.min(1.0, melodyVolume + 0.1);
  melodyAudio.volume = melodyVolume;
});

downVol.addEventListener('click', () => {
  melodyVolume = Math.max(0.0, melodyVolume - 0.1);
  melodyAudio.volume = melodyVolume;
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
      leftJoyCon.style.transform = 'translateX(42em)';
      rightJoyCon.style.transform = 'translateX(0)';
      mounting.style.transform = 'translateY(0) translateX(-20em)';
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


