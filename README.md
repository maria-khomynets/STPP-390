# Travel Decor: Journey Match — Landing Page

Лендінг мобільної гри **Travel Decor: Journey Match** — заспокійлива match-3 подорож світом.
Адаптивна верстка (mobile-first), збірка на Vite, автоматичний деплой на GitHub Pages.

## Live demo

https://maria-khomynets.github.io/STPP-390/

## Стек

- **Vite 5** + `vite-plugin-html-inject` (підключення partial-файлів)
- **Vanilla JavaScript** (ES modules)
- **Swiper** — слайдер відгуків
- **AOS** — анімації при скролі
- **CSS** з `postcss-sort-media-queries` (mobile-first)

## Структура проєкту

```
src/
├── partials/            # Секції лендінгу (hero, about, how-to-play, features, reviews, contact, footer, header, mobile-menu)
├── css/                 # Стилі секцій
├── img/sections/        # Зображення секцій
├── img/sprite.svg       # SVG-спрайт іконок
├── js/                  # Скрипти (burgerMenu, headerScroll, swiper)
├── index.html           # Головна сторінка
├── privacy-policy.html  # Політика конфіденційності
├── terms-conditions.html# Умови використання
└── main.js              # Вхідна точка застосунку
```

## Сторінки

- `/` — головний лендінг (всі секції)
- `/privacy-policy.html` — політика конфіденційності
- `/terms-conditions.html` — умови використання

## Запуск локально

```bash
npm install      # встановити залежності
npm run dev      # dev-сервер з hot reload
npm run build    # продакшн-збірка у dist/
npm run preview  # локальний перегляд збірки
```

## Деплой

Автоматичний через GitHub Actions: на push у гілку `main` workflow
`.github/workflows/deploy.yml` збирає проєкт і публікує `dist/` у гілку `gh-pages`.

## Особливості

- Зображення підключені через абсолютні шляхи від кореня (`/img/...`)
- Анімації AOS поважають `prefers-reduced-motion`
- Повна адаптивність: мобільний, планшет, десктоп (1440px)
