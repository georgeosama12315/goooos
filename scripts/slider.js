let sliders = document.querySelectorAll('#slider'); // Use a class to target multiple sliders
let arrow_left = document.getElementById('arrow-left');
let arrow_right = document.getElementById('arrow-right');
let points = document.querySelectorAll('.point'); // Use a class to target points

let knowNo = 0;

// Function to update the slider position
function updateSlider() {
  sliders.forEach((slider, index) => {
    slider.style.transform = `translateX(-${knowNo * 200}%)`; // Assuming each slide takes 100% width
  });

  // Reset background color of all points
  points.forEach((point) => {
    point.style.background = 'none'; // Set default background color for points
  });

  // Update background color for active point
  points[knowNo].style.background = '#fff';
}

// Add onclick event for points
points.forEach((point, index) => {
  point.onclick = () => {
    knowNo = index;
    updateSlider();
  };
});

// Add onclick event for right arrow
arrow_right.onclick = () => {
  knowNo = (knowNo + 1) % sliders.length; // Increment knowNo and reset if it exceeds the number of slides
  updateSlider();
};

// Add onclick event for left arrow
arrow_left.onclick = () => {
  knowNo = (knowNo - 1 + sliders.length) % sliders.length; // Decrement knowNo and reset if it goes below 0
  updateSlider();
};

// Initial call to updateSlider to set initial state
updateSlider();

