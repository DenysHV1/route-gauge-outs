import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperReviews = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 800,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
};

export default swiperReviews;