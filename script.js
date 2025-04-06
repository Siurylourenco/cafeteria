document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobilemenu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

const menu = document.getElementById("mobilemenu");

// Fecha o menu ao rolar a página
window.addEventListener("scroll", () => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

// Também fecha quando clicar em um link do menu
const links = document.querySelectorAll("#mobilemenu a");
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.card-flip');
  
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        const innerCard = card.querySelector('.flip-card');
        const isFlipped = innerCard.style.transform === 'rotateY(180deg)';
        innerCard.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
      });
    });
  });
  

  // Detecta se é touch (mobile)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    const card = document.getElementById("card1");
    const inner = card.querySelector(".card-inner");

    card.addEventListener("click", () => {
      inner.classList.toggle("rotate-y-180");
    });
  }

