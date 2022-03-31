import { Dot } from "./Dot.js";
import { isPrime } from "./utils.js";

// configuration
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const RESOLUTION = 5; //cell size
const COLS = parseInt(canvas.width / RESOLUTION);
const ROWS = parseInt(canvas.height / RESOLUTION);

const dots = [];

let stepState = 0;
let stepCount = 1;

let initX = canvas.width / 2;
let initY = canvas.height / 2;

const c = new Dot(0, canvas.width / 2, canvas.height / 2, 10, "#222");

dots.push(c);

const animate = () => {
  dots.forEach((d) => {
    d.draw();
  });
  requestAnimationFrame(animate);
};

animate();

export { ctx };
