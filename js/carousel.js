// -------------- Swiper testimonials index.html Carousel --------------
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
    // Optional parameters
    loop: false, // con 'loop: false' il carosello non si ripete all'infinito

    spaceBetween: 70, // con 'spaceBetween: 70' si crea uno spazio tra le slide

    effect: "coverflow", // con 'effect: "coverflow"' il carosello scorre con l'effetto coverflow
    grabCursor: true,
    initialSlide: 1, // con 'initialSlide: 1' viene visualizzata per prima la seconda slide, quella centrale delle 3 slide/card del carosello
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 13,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
},

    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
},

    /*// Navigation arrows*/
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
});


// -------------- Swiper guide contactus.html Carousel --------------
const guideSwiper = new Swiper(".guide-swiper", {
    // Optional parameters
    loop: false, // con 'loop: false' il carosello non si ripete all'infinito

    effect: "coverflow", // con 'effect: "coverflow"' il carosello scorre con l'effetto coverflow
    grabCursor: true,
    initialSlide: 1, // con 'initialSlide: 1' viene visualizzata per prima la seconda slide, quella centrale delle 3 slide/card del carosello
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// -------------- Swiper Image 5_othania.html Carousel --------------
const imageSwiper = new Swiper(".image-Swiper", {
    // Optional parameters
    loop: false, // con 'loop: false' il carosello non si ripete all'infinito
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,

    spaceBetween: 0, // con 'spaceBetween: 70' si crea uno spazio tra le slide

    effect: "coverflow", // con 'effect: "coverflow"' il carosello scorre con l'effetto coverflow
    coverflowEffect: {
        rotate: 13,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    initialSlide: 1, // con 'initialSlide: 1' viene visualizzata per prima la seconda slide, quella centrale delle 3 slide/card del carosello

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    /*// Navigation arrows*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// -------------- Swiper Award 1_ourStory.html Carousel --------------
const awardSwiper = new Swiper(".award-Swiper", {
    // Optional parameters
    centeredSlides: true,
    grabCursor: true,

    loop: true,

    autoplay: {
        delay: 150,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 4000,
    slidesPerView: 1,
    spaceBetween: 0, // con 'spaceBetween: 70' si crea uno spazio tra le slide

    effect: "coverflow", // con 'effect: "coverflow"' il carosello scorre con l'effetto coverflow
    coverflowEffect: {
        rotate: 13,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    initialSlide: 1, // con 'initialSlide: 1' viene visualizzata per prima la seconda slide, quella centrale delle 3 slide/card del carosello

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    /*// Navigation arrows*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});