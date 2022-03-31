import { isPrime } from "./utils.js";
import { ctx } from "./script.js";

let stepState = 0; // step
let stepCount = 1; // n
let numSteps = 0;
let stepTurner = 0;

const stepLen = 15;

let oldX = 0;
let oldY = 0;

class Dot {
  constructor(n, x, y, radius, color) {
    this.n = n;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  setN = () => {
    this.n++;
  };

  connect = (oldX, oldY) => {
    ctx.beginPath();
    ctx.moveTo(oldX - this.radius / 2, oldY - this.radius / 2);
    ctx.lineTo(this.x - this.radius / 2, this.y - this.radius / 2);
    ctx.strokeStyle = "#e5e5e5";
    ctx.stroke();
  };

  draw = () => {
    ctx.beginPath();
    ctx.arc(
      this.x - this.radius / 2,
      this.y - this.radius / 2,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = "#e5e5e5";
    ctx.fill();
  };

  update = () => {
    if (this.y < 2000 && this.x < 2000) {
      this.setN();
      oldX = this.x;
      oldY = this.y;
      switch (stepState) {
        case 0:
          this.x = this.x + stepLen;
          break;
        case 1:
          this.y = this.y - stepLen;
          break;
        case 2:
          this.x = this.x - stepLen;
          break;
        case 3:
          this.y = this.y + stepLen;
          break;
        default:
          break;
      }
      numSteps++;
      if (numSteps % stepCount == 0) {
        stepState = (stepState + 1) % 4;
        stepTurner++;
        if (stepTurner % 2 == 0) {
          stepCount = stepCount + 1;
        }
      }
      if (isPrime(this.n)) {
        this.draw();
      }
      this.connect(oldX, oldY);
    }
  };
}

export { Dot };
