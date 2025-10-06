const menuBtn = document.getElementById('menu-btn1');
const menu = document.getElementById('menu1');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});