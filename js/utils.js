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

const spiner = (s) => {
  switch (s) {
    case 0:
      this.x++;
      break;
    case 1:
      this.x++;
      break;
    case 2:
      this.x++;
      break;
    case 3:
      this.x++;
      break;

    default:
      break;
  }
};

const init = () => {
  for (let i = 0; i < 100; i++) {
    let radius = 3;
    let x = 3 + Math.random();
    let y = 3 + Math.random();
    let color = "#222";

    particlesArray.push(
      new Dot(i, x, y, directionX, directionY, radius, color)
    );
  }
};

export { isPrime, spiner };
