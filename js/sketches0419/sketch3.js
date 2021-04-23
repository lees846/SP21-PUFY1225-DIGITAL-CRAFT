// This is a sketch where I'm playing with an example of repeated random code that uses for-loops
// Original code from https://editor.p5js.org/amoore14/sketches/FGR43__Ka

function setup() {
  createCanvas(600, 600);
  background(0);
  // noLoop();
  noStroke();
  // colorMode(HSB); I turned this off, was in the original code, I use rgba
  frameRate(20);
}

// The first layer has pink/purple circles that undulate in color
function draw() {
  for (let i = 20; i < width; i += 40) {
    for (let j = 20; j < height; j += 40) {
      const rFill = random(0, 255);
      fill(rFill, 0, 100, 25);
      ellipse(i, j, 40, 40);
    }
  }

// I wanted to fill in the gaps with another color that's similar but different
for (let i = 40; i < width; i += 40) {
    for (let j = 40; j < height; j += 40) {
      const rFill = random(0, 255);
      fill(100, 0, rFill, 50);
      ellipse(i, j, 10, 10);
    }
  }
}

// I like that this has movement