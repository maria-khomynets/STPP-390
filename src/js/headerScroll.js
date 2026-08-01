const headerEl = document.querySelector('[data-scrolled]');

if (headerEl) {
  const toggleScrolled = () => {
    headerEl.dataset.scrolled = window.scrollY > 10 ? 'true' : 'false';
  };

  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });
}
