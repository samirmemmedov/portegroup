
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
      swiper: swiper,
  },
});


// slider 2
var swiper = new Swiper(".mySwiper", {
  loopedSlides: 4,
loop: true,
slidesPerView: 3,
spaceBetween: 30,
freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
 
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  },
}); 


//Responsive navigation

        hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function () {
            navBar = document.querySelector(".nav-bar");
            navBar.classList.toggle("active");
        }