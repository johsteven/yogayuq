const testimonialSwiper = new Swiper(".testimonial-swipe", {
    slidesPerView: "auto",
    pagination: {
        el: ".testimonial-swipe-pagination",
    }
});


const classesSwiper = new Swiper(".classes-swipe", {
    slidesPerView: "auto",
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
    },
});