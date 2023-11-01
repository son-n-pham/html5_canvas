const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Draw rectangle
c.fillStyle = 'rgba(255, 0, 0, 0.7)';
c.fillRect(x = 100, y = 100, w = 100, h = 100);
c.fillStyle = 'rgba(0, 100, 0, 0.7)';
c.fillRect(x = 400, y = 100, w = 100, h = 100);
c.fillRect(x = 300, y = 300, w = 100, h = 100);

console.log(canvas)

// Draw lines
c.beginPath();
c.moveTo(x = 0, y = 300);
c.lineTo(x = 300, y = 100);
c.lineTo(x = 400, y = 300);
c.strokeStyle = 'blue';
c.stroke();

c.beginPath();
c.moveTo(x = 10, y = 500);
c.lineTo(x = 600, y = 700);
c.lineTo(x = 200, y = 500);
c.strokeStyle = 'red';
c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(x = 500, y = 700, radius = 70, startAngle = 45, endAngle = Math.PI * 2, anticlockwise = false);
// c.strokeStyle = 'green';
// c.stroke();

for (let i = 1; i < 10; i++){
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight; 
    c.beginPath();
    c.arc(x, y, radius = i*20, startAngle = 0, endAngle = Math.PI * 2, anticlockwise = false);
    c.strokeStyle = 'green';
    c.stroke();
}