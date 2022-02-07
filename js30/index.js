const navItems = document.querySelectorAll('.nav__item');
const navList = document.querySelector('.nav__list');
const image = document.querySelector('.main');


function changeImage(event) {
  navItems.forEach(el =>
    el.classList.remove('active'));
    event.target.classList.add('active');

    let currentItem = event.target.dataset.item;
    console.log(currentItem);

    if (event.target.dataset.item ===  currentItem ) {
      console.log (event.target.dataset.item )
      image.style.backgroundImage = `url('./assets/img/${currentItem}.jpg')`
    }
}

navList.addEventListener ('click', changeImage);



