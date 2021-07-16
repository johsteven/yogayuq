// Variables
const slides = document.querySelectorAll(".slide");

// Functions
function slideEvent() {
    slides.forEach(slide => {
        slide.classList.remove("active")
    })
    const item = this.classList.add("active");
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    const testimonialSwiper = new Swiper("#testimonial-swipe-container", {
        slidesPerView: "auto",
        pagination: {
            el: "#testimonial-swipe-pagination",
        }
    });

    const classesSwiper = new Swiper("#classes-swipe-container", {
        slidesPerView: "auto",
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
        },
    });

    AOS.init({
        once: true,
    });
}

function eventListener() {
    slides.forEach(slide => {
        slide.addEventListener("click", slideEvent);
    })
}