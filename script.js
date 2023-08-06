const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu__list');

menuBtn.addEventListener('click',()=> {
    menuMobile.classList.toggle('menu--open');
}); 

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  });