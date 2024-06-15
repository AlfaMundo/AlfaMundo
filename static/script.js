// Funcionalidad para el menú mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMobile = document.querySelector('.nav-mobile');

menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
});
