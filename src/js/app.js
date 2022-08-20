const burgerButton = document.querySelector('button.header__burger');
const nav = document.querySelector('nav.nav');

burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    burgerButton.classList.toggle('header__burger_active');
    nav.classList.toggle('nav_active');
    document.body.classList.toggle('no-scroll');
})