// Initialize VANTA.BIRDS background
VANTA.BIRDS({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 460.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xff0000, // Red color
    color2: 0xd1ff,   // Light color
    wingSpan: 28.00,
    speedLimit: 9.00,
    separation: 30.00,
    alignment: 24.00,
    cohesion: 23.00,
    backgroundAlpha: 1.00
});

// JavaScript for automatic slider functionality
const slider = document.getElementById("slider");
let index = 0;

const totalSlides = document.querySelectorAll(".slider-item").length;

// Function to move to the next slide
const nextSlide = () => {
  index++;
  if (index >= totalSlides) {
    index = 0; // Loop back to the first slide
  }
  updateSliderPosition();
};

// Update the slider position
const updateSliderPosition = () => {
  const slideWidth = document.querySelector(".slider-item").clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
};

// Automatically change the slide every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);
