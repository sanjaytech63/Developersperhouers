function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});