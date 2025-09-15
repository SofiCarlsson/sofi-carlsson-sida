const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.navbar_menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});