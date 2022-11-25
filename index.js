let toggleIcon = document.getElementById('menu-icon');
let navLinks = document.querySelector('.nav-menu');
toggleIcon.onclick = function() {
    navLinks.classList.toggle('visible-menu');
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('overlay-effect');
    
    if (toggleIcon.getAttribute('src') === './assets/images/icon-menu.svg') {
        toggleIcon.setAttribute('src','./assets/images/icon-menu-close.svg');
    } else {
        toggleIcon.setAttribute('src','./assets/images/icon-menu.svg');
    }
}