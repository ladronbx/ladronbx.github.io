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






/*


const homeButton = document.getElementById('home');
const video = document.getElementById("video");

homeButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
const homeButton = document.getElementById('home');
const video = document.getElementById("video");

homeButton.addEventListener("click", () => {
    const isVisible = video.style.display === 'block';
    video.style.display = isVisible ? 'none' : 'block';
});

const boton = document.querySelector('.boton-encender');
const img = document.getElementById("imagen")

boton.addEventListener("click", () => {
    const isVisible = img.style.display === 'block';
    img.style.display = isVisible ? 'none' : 'block';
});


*/