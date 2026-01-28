const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
openMenuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
});
closeMenuBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'block';
});