let toggleIcon = document.getElementById('menu-icon');
let navLinks = document.querySelector('.nav-menu');
toggleIcon.onclick = function() {
    navLinks.classList.toggle('visible-menu');
}