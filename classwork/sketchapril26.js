let xPos = 300;
let yPos = 100;
let ySpeed = 5;
let xSpeed = 3;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(220);
  yPos += ySpeed;
  xPos += xSpeed;
  ellipse(xPos, yPos, 50, 50);
  if (yPos >= height || yPos <= 0){
    ySpeed *= -1;
  }
  if (xPos >= width || xPos <= 0){
    xSpeed *= -1
  }
}


/*
function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(10);
  background(220);
}

function draw() {
  fill(100, 100, 200)
  for (let i = 5; i < width + 25; i += 25) {
    for (let y = 5; y < height; y += 25){
      ellipse(i, y, 50, 25);
      fill(random(0, 200), 0, random(0, 255), 100);
    }
  }
}
*/