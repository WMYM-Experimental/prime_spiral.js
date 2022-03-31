import { isPrime } from "./utils.js";
import { ctx } from "./script.js";

class Dot {
  constructor(n, x, y, radius, color) {
    this.n = n;
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

  update() {
    this.draw();
    // TODO: spiral behavior
  }
}

export { Dot };
