
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function initReviewsSwiper() {
  const reviewsSlider = document.querySelector('[data-reviews-swiper]');
  if (!reviewsSlider) return;

  new Swiper(reviewsSlider, {
    modules: [Navigation],
    watchSlidesProgress: true,
    slidesPerView: 1,      
    spaceBetween: 34,
    grabCursor: true,
    loop: false,

    navigation: {
      nextEl: '[data-swiper-next]',
      prevEl: '[data-swiper-prev]',
      disabledClass: 'swiper-button-disabled',
    },
    

    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 57,
      },
    },
  });
}

initReviewsSwiper();