'use strict';

// Hamburger Icon
var hamburgerIcon = document.getElementById('hamburger-icon');
hamburgerIcon.addEventListener('click', ev => {
  if (hamburgerIcon.className === 'active') {
    hamburgerIcon.className = '';
  } else {
    hamburgerIcon.className = 'active';
  }
});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}


// Slider
var Slider = (function() {
  var sliderElm = document.getElementById('slider');
  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var slides = Array.from(document.querySelectorAll('#slider .slide'));

  var currentSlide = 0;

  leftArrow.addEventListener('click', ev => {
    changeSlide("left");
  });

  rightArrow.addEventListener('click', ev => {
    changeSlide("right");
  });

  function changeSlide(direction) {
    if (direction === "left") {
      slides[currentSlide].style.opacity = 0;
      currentSlide = currentSlide - 1;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      slides[currentSlide].style.opacity = 1;
    } else if (direction === "right") {
      slides[currentSlide].style.opacity = 0;
      currentSlide = currentSlide + 1;
      if (currentSlide > slides.length - 1) {
        currentSlide = 0;
      }
      slides[currentSlide].style.opacity = 1;
    }
  }
})();
