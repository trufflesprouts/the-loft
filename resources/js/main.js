'use strict';
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
  var slides = Array.from(document.getElementsByClassName('slides'))[0];
  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var scrollArrow = document.getElementById('scroll-arrow');

  var slideWidth = sliderElm.offsetWidth;
  var currentPosition = 0;

  leftArrow.addEventListener('click', ev => {
    changeSlide("left");
  });

  rightArrow.addEventListener('click', ev => {
    changeSlide("right");
  });

  function changeSlide(direction) {
    if (direction === "left") {
      slides.style.marginLeft = (currentPosition + slideWidth) +"px";
      currentPosition += slideWidth;
    } else if (direction === "right") {
      slides.style.marginLeft = (currentPosition - slideWidth) +"px";
      currentPosition -= slideWidth;
    }
  }

  function privateFunction() {
    console.log("Name:" + privateVar);
  }
  return {
  };
})();

// Slider.setName( "Paul Kinlan" );
