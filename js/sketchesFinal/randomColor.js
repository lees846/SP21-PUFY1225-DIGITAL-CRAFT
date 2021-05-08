// mouseIsPressed function learned from https://www.youtube.com/watch?v=_n7o-_Z1ne0 and various Coding Train videos
// This is just my way of trying to figure out how to change the color and let it stay once the screen is clicked


function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  frameRate(30);
}

function draw() {
  // my color variables
    let r;
    let g;
    let b;

  // when it should work
    if(mouseIsPressed == true){
      // console.log("pressed");
      r = random(0, 255);
      g = random(0, 10);
      b = random(0, 255);
    }
  // what it's doing
    fill(r, g, b);
    ellipse(200, 200, 100, 100);
}