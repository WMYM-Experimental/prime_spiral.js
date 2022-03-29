// configuration
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const RESOLUTION = 5; //cell size
const COLS = parseInt(canvas.width / RESOLUTION);
const ROWS = parseInt(canvas.height / RESOLUTION);

// utils
const isPrime = (n) => {
  let l = Math.sqrt(n);

  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
    return false;
  }

  if (n % 2 == 0) {
    return n == 2;
  }
  if (n % 3 == 0) {
    return n == 3;
  }

  for (let i = 5; i <= l; i += 6) {
    if (n % i == 0) {
      return false;
    }
    if (n % (i + 2) == 0) {
      return false;
    }
  }

  return true;
};

//setup
const createArr = () => {
  const arr = Array(COLS * ROWS);
  return arr;
};

class Dot {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  conect() {
    // ctx.lineTo(x, y);
    // ctx.lineJoin = 'round';
  }

  draw() {
    ctx.beginPath();
    ctx.stroke();
    ctx.arc(
      this.x - this.radius / 2,
      this.y - this.radius / 2,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = "#222";
    ctx.fill();
  }
}

const dots = [];

const c = new Dot(canvas.width / 2, canvas.height / 2, 3, "#222");

dots.push(c);

const animate = () => {
  dots.forEach((d) => {
    d.draw();
  });
};
console.log(createArr());
console.log(canvas.height / 5, canvas.width / 5);
animate();
