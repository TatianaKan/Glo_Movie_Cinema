const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav-modal');
const navClose = document.querySelector('.close');

burger.addEventListener('click', () => {
  nav.style.display = 'flex';
  navClose.style.display = 'flex';
  burger.style.display = 'none';
});

navClose.addEventListener('click', () => {
  nav.style.display = 'none';
  navClose.style.display = 'none';
  burger.style.display = 'flex';
});