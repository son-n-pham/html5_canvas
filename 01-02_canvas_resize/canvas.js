// Create a circle
const canvas = document.querySelector('canvas');

// Set canvas to the whole width and height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the context of the canvas to 2d
const c = canvas.getContext('2d');

// Draw a circle
c.beginPath();
c.arc(x = 400, y = 400, r = 100, start = 0, end = Math.PI * 2, counterClockwise = false);
c.strokeStyle = 'red';
c.stroke()

function animat() {
    requestAnimationFrame(animat);
    console.log('Hello')
}

animat();