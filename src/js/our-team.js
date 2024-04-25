const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 18,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    freeMode: true,
    speed: 800,
    keyboard: true,
});


