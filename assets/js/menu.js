const menuMobile = document.querySelector('.header-mobile-container');
const btnOpenMenu = document.querySelector('button.open-menu');
const menuLinks = document.querySelectorAll('button.menu-link');
const openMenuClass = 'opened';
const openAndCloseMenu = () => menuMobile.classList.toggle(openMenuClass);

btnOpenMenu.addEventListener('click', openAndCloseMenu);


menuLinks.forEach((link) => link.addEventListener('click', () => menuMobile.classList.remove(openMenuClass)));
