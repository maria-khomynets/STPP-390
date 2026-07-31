const headerEl = document.querySelector('.header');

if (headerEl) {
  const toggleScrolled = () => {
    headerEl.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });
}
