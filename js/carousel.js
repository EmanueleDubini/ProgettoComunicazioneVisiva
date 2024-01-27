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

    /*autoplay: { // con 'autoplay: true' il carosello scorre automaticamente
        delay: 5000,
    },*/


    /*// Navigation arrows*/
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
    /*
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});


// -------------- Swiper guide contactus.html Carousel --------------
const guideSwiper = new Swiper(".guide-swiper", {
    // Optional parameters
    loop: false, // con 'loop: false' il carosello non si ripete all'infinito

    ///spaceBetween: 30,

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

    /*autoplay: { // con 'autoplay: true' il carosello scorre automaticamente
        delay: 5000,
    },*/


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    /*
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },*/
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

    /* autoplay: { // con 'autoplay: true' il carosello scorre automaticamente
         delay: 5000,
         pauseOnMouseEnter: true, // con 'pauseOnMouseEnter: true' il carosello si ferma quando il mouse è sopra
         disableOnInteraction: true, // con 'disableOnInteraction: false' il carosello non si ferma quando si clicca su una slide
     },*/


    /*// Navigation arrows*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    /*
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});

// -------------- Swiper Award 1_ourStory.html Carousel --------------
const awardSwiper = new Swiper(".award-Swiper", {
    // Optional parameters
    centeredSlides: true,
    grabCursor: true, //todo misa che grabCursor va impostato a false perchè mentre le card si muovono in automatico da desktop se si cerca di trascinarle con il mouse fa uno strano effetto

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

    /* autoplay: { // con 'autoplay: true' il carosello scorre automaticamente
         delay: 5000,
         pauseOnMouseEnter: true, // con 'pauseOnMouseEnter: true' il carosello si ferma quando il mouse è sopra
         disableOnInteraction: true, // con 'disableOnInteraction: false' il carosello non si ferma quando si clicca su una slide
     },*/


    /*// Navigation arrows*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    /*
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },*/
});