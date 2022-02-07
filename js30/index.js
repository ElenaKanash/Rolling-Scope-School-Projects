const navItems = document.querySelectorAll('.nav__item');
const navList = document.querySelector('.nav__list');
const image = document.querySelector('.main');
const button = document.querySelector('button');
const logoPlay = document.querySelector('.logo__img');
console.log(logoPlay)

//change Images on navItem click
function changeImage(event) {
  navItems.forEach(el =>
    el.classList.remove('active'));
    event.target.classList.add('active');

    let currentItem = event.target.dataset.item;

    if (event.target.dataset.item ===  currentItem ) {
      image.style.backgroundImage = `url('./assets/img/${currentItem}.jpg')`
    }
}
navList.addEventListener ('click', changeImage);

// change button img on click

function toggleBtn() {
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);

// create player

const audio = new Audio();

function playAudio() {
  audio.src = '/assets/audio/forest.mp3'
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function playSong (e){
  const isPlay = e.target.classList.contains('pause');
  if (isPlay) {
    playAudio()
  } else {
    pauseAudio();
  }
}
button.addEventListener('click', playSong);


  function playLogo(e) {

  image.style.backgroundImage = 'url("./assets/img/forest.jpg")'
  logoPlay.classList.toggle('active');
  const isPlay = logoPlay.classList.contains('active');
  if (isPlay) {
    toggleBtn()
    playAudio()
  } else {
    toggleBtn()
    pauseAudio();
  }
}
logoPlay.addEventListener('click', playLogo);







