//Botones
const aButton = document.getElementById('aButton');
const bButton = document.getElementById('bButton');
const yButton = document.getElementById('yButton');

//Videos
const animal = document.getElementById('videoAnimal');
const zelda = document.getElementById('videoZelda');
const intro = document.getElementById('videoIntro');


//z-index
let i = 0;

aButton.addEventListener('click', () => {
    restartVideo(animal);
    i++;
    animal.style.zIndex = i.toString();
  });
  
  bButton.addEventListener('click', () => {
    restartVideo(zelda);
    i++;
    menu.style.zIndex = i.toString(); 
  });
  
  yButton.addEventListener('click', () => {
    restartVideo(intro);
    i++;
    intro.style.zIndex = i.toString();
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
      eventCount = 0;
      break;
    default:
      leftJoyCon.style.transform = 'translateY(0)';
      rightJoyCon.style.transform = 'translateY(0)';
      mounting.style.transform = 'translateY(0)';
      eventCount = 0;
      break;
  }
});
