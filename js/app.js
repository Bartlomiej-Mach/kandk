//Slider home text animation
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
    
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide--item");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 9990);
}


//navigation animation

const menuButton = document.querySelector('.hamburger-menu');
const arr1 = ['.line__inner-1', '.line__inner-2', '.line__inner-3'];
const arr2 = ['.list-item-1', '.list-item-2', '.list-item-3', '.list-item-4'];

const openClose = () => {

    document.querySelector('.list-wrapper').classList.toggle('list-wrapper--active');
    arr1.forEach(element => {
        document.querySelector(element).classList.toggle('line__inner--active');
    });
    document.querySelector('.logo').classList.toggle('logo--active');
    arr2.forEach(element => {
        document.querySelector(element).classList.toggle('list--item--active');
    });
    document.querySelector('.back-nav').classList.toggle('back-nav--active');
    document.querySelector('.nav-social-wrapper').classList.toggle('nav-social-wrapper--active');
};

menuButton.addEventListener('click', openClose);
document.querySelector('.back-nav').addEventListener('click', openClose);

arr2.forEach(element => {  
    document.querySelector(element).addEventListener('click', openClose);
});


//animation loading-screen 




var tl = gsap.timeline();

tl.to('.description', {
    y: 50,
    opacity: 0,
    duration: .2,
    delay: 2.2,
});

tl.to('.main-text', {
    y: 50,
    opacity: 0,
    duration: .3,
});

tl.to('.header-section__loading-animation', {
    opacity: 0,
    duration: 1,
});
tl.to('.header-section__loading-animation', {
    display: 'none',
    delay: .1,
});
tl.from('.heading-level', {
    y: -40,
    opacity: 0,
    stagger: .1,
});
tl.from('.header-section__animated-arrow-wrapper', {
    y: -130,
    opacity: 0,
    background: 'white',
});
tl.to('.header-section__animated-arrow-wrapper', {
    delay: .2,
    background: 'transparent',
});
tl.from('.header-section__animated-content-wrapper', {
    opacity: 0,
});

tl.from('.navigation-section', {
    y: '-100%',
    opacity: 0,
});
tl.from('.header-section__social-wrapper', {
    x: 50,
    opacity: 0,
}, "<");

