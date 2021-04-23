// This is a sketch where I'm playing with an example of repeated random code that uses for-loops
// Original code from https://editor.p5js.org/amoore14/sketches/FGR43__Ka

function setup() {
  createCanvas(600, 600);
  background(0);
  // noLoop();
  noStroke();
  // colorMode(HSB); I turned this off, was in the original code, I use rgba
  frameRate(30);
}

function draw() {
  for (let i = 20; i < width; i += 40) {
    for (let j = 20; j < height; j += 40) {
      const rFill = random(0, 255);
      fill(200, rFill, 0, 25);
      ellipse(i, j, 40, 40);
    }
  }

// I wanted to incoorporate another moving element above the previous layer
  for (let ii = 20; ii < width; ii += 20) {
    for (let jj = 20; jj < height; jj += 20) {
      const rFill = random(0, 255);
      fill(0, 0, rFill, 50);
      ellipse(ii, jj, 10, 10);
    }
  }
}
