const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector ('.nav-close');

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.card-portfolio__img');


// burger navigation in header
burger.addEventListener('click', () => {
  menu.classList.add('nav_active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('nav_active');
});

menu.addEventListener('click', closeMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    menu.classList.remove('nav_active');
  }
}

// Changing Images in the Portfolio Section
portfolioBtns.addEventListener ('click', changeImage);

function changeImage () {
  //change color of button
  portfolioBtn.forEach(el => el.classList.add('btn--transparent'));
  event.target.classList.toggle('btn--transparent');

  //change img
  let currentBtn = event.target.dataset.season;

  portfolioImages.forEach((img, index) =>
      img.src = `./assets/img/${currentBtn}/${index + 1}.jpg`);
}

//Image caching
function preloadSummerImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach(el => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${el}/${i}.jpg`;
    }
  } )
}
preloadSummerImages();














