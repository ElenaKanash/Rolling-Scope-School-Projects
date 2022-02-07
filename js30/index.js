const navItems = document.querySelectorAll('.nav__item');
const navList = document.querySelector('.nav__list');
const image = document.querySelector('.main');

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
const button = document.querySelector('button');

function toggleBtn() {
  button.classList.toggle('pause');
}

button.addEventListener('click', toggleBtn);






