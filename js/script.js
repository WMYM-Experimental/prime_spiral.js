import { Dot } from "./Dot.js";

// configuration
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  this.location.reload();
});

const doty = new Dot(
  0,
  parseInt(canvas.width / 2),
  parseInt(canvas.height / 2),
  5,
  "#222"
);

const animate = () => {
  doty.update();
  requestAnimationFrame(animate);
};

animate();

export { ctx };
