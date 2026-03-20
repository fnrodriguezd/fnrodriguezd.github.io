function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const btn = document.getElementById('menu-btn');
  menu.classList.toggle('abierto');
  btn.classList.toggle('activo');
}

const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
const lightboxImg = document.createElement('img');
overlay.appendChild(lightboxImg);
document.body.appendChild(overlay);

document.querySelectorAll('.proyecto-imagen img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('activo');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('activo');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') overlay.classList.remove('activo');
});