// Main entry point for the application
import AOS from 'aos';
import 'aos/dist/aos.css';
import './js/burgerMenu.js';
import './js/headerScroll.js';
import './js/swiper.js';

AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  disable: 'prefers-reduced-motion',
});
