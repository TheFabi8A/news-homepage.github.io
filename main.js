const btnMenu = document.getElementById('btnMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const navbar = document.getElementById('navbar');

btnMenu.addEventListener('click', () => {
  navbar.classList.toggle('view-navbar');
  console.log('presionando btnMenu');
});

btnCloseMenu.addEventListener('click', () => {
  navbar.classList.toggle('view-navbar');
  console.log('presionando btnCloseMenu');
});
