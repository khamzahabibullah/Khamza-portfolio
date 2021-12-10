const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarItems = document.getElementsByClassName('navigation__items')[0];
const navbarButton = document.getElementsByClassName('navigation__button')[0];
console.log(toggleButton);
toggleButton.addEventListener('click', () => {
  navbarButton.classList.toggle('active');
  navbarItems.classList.toggle('active');
});
