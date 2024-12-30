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


const modal = document.getElementById('quoteModal');
    
    // Get the button that opens the modal
    const openModalBtn = document.getElementById('openModal');
    
    // Get the button that closes the modal
    const closeModalBtn = document.getElementById('closeModal');
    
    // When the user clicks the button, open the modal
    openModalBtn.onclick = function () {
        modal.classList.remove('hidden');
    };
    
    // When the user clicks the close button, close the modal
    closeModalBtn.onclick = function () {
        modal.classList.add('hidden');
    };
    
    // Optional: Close the modal if the user clicks outside the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    };