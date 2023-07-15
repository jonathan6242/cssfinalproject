const menuOpen = document.querySelector('#open');
const menuClose = document.querySelector('#close');

menuOpen.addEventListener('click', () => {
  document.body.classList.add('menu-open');
})

menuClose.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
})