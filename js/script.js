// Selectors
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('.navbar-logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

// Event Listener
menu.addEventListener('click', mobileMenu);