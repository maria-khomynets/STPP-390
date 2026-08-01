const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const menuNavEl = burgerMenuEl.querySelector('nav');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});

menuNavEl.addEventListener('click', e => {
  if (e.target.closest('a')) {
    burgerMenuEl.dataset.visible = 'close';
  }
});
