// script.js

const menuIcon = document.getElementById('menu-icon');
const navbox = document.getElementById('navbox');
const contentSections = document.getElementById('content-sections');
const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

// Alternar visibilidade da navbox e seções
menuIcon.addEventListener('click', () => {
  const isVisible = navbox.style.display === 'flex';
  navbox.style.display = isVisible ? 'none' : 'flex';
  contentSections.style.display = isVisible ? 'none' : 'block';
});

// Lógica para abas: ao clicar, destaca, mas agora mostra tudo
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Rolagem suave até a seção
    const target = document.getElementById(button.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const target = document.getElementById(button.dataset.target);
target.scrollIntoView({ behavior: 'smooth' });
