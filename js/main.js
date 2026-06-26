function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.querySelector('.nav-toggle');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  btn.textContent = isOpen ? '✕' : '☰';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});
