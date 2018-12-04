var swiper = new Swiper('.big-swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
    },
});

var swiper = new Swiper('.swiper-container-promo', {
    pagination: '.swiper-container-promo',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

$('.catalog__more-items').on('click', function (e) {
    e.preventDefault();
    $('.catalog-hide').slideToggle();
});