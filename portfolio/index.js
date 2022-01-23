const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector ('.nav-close');




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









//console.log(1)

