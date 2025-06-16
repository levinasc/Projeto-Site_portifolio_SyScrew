
// menu.js

// Seleciona os elementos HTML usando seus IDs
const btnAbrirMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlayMenu = document.getElementById('overlay-menu');
const btnFecharMenu = document.querySelector('.menu-mobile .btn-fechar'); // Seleciona o botão de fechar dentro do menu

// Função para abrir o menu
function abrirMenu() {
    menuMobile.classList.add('abrir-menu');
}

// Função para fechar o menu
function fecharMenu() {
    menuMobile.classList.remove('abrir-menu');
}

// Adiciona os event listeners
if (btnAbrirMenu) {
    btnAbrirMenu.addEventListener('click', abrirMenu);
}

if (btnFecharMenu) {
    btnFecharMenu.addEventListener('click', fecharMenu);
}

if (overlayMenu) {
    overlayMenu.addEventListener('click', fecharMenu);
}