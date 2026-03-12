// ROLAGEM SUAVE PARA ÂNCORAS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ANIMAÇÃO DE ENTRADA NAS SEÇÕES
function showSectionsOnScroll() {
  const sections = document.querySelectorAll('section:not(.hero)');
  const trigger = window.innerHeight * 0.88;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < trigger) {
      sec.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', showSectionsOnScroll);
window.addEventListener('DOMContentLoaded', showSectionsOnScroll);
