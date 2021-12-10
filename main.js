const toggleButton = document.querySelector('.toggle-button');
const navbarItems = document.querySelector('.navigation__items');
const navbarButton = document.querySelector('.navigation__button');

toggleButton.addEventListener('click', () => {
  navbarItems.classList.toggle('active');
  navbarButton.classList.toggle('active');
});
