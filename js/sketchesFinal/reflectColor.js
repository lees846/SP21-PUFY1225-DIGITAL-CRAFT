// The goal is to have the reflection lines leave/meet the edge of the canvas despite where the mouse might be, but to maintain a reflection that is the inverse of the way the user's line hits the reflection point. The user will be able to randomly change the color based when they click the mouse.
  
// for random color and ability to use mouseClicked 
  let canv;
  let r;
  let g;
  let b;

function setup(){
  canv = createCanvas(800, 800);
  background(0);
}

function draw(){
  //setting center/reflection point
      const centerX = 0.75 * width;
      const centerY = 0.5 * height;
    //setting lines that are the point where the code will detect that it needs to switch which line is shown
      const topDiag = slope(0, 0, centerX, centerY);
      const bottomDiag = slope(centerX, centerY, 0, height);
  
  background(0);
  
   // light source
      if (mouseX < centerX){
        stroke(255);
        strokeWeight(3);
        line(mouseX, mouseY, centerX, centerY);
      }

  // mirror
      // changes coloe when mouse is clicked
        canv.mouseClicked(changeColor);
      stroke(r, g, b, 255);
      strokeWeight(10);
      line(centerX, 0, centerX + 10, height);

  // reflection line(s), I set a conditional that only draws to the left of the mirror and ones that explain when each relfection line should be shown (depending on the mouse position).
      if (mouseX < centerX && mouseX >= 0 && mouseY <= centerY && slope(mouseX, mouseY, centerX, centerY) >= topDiag){  
        reflectXbottom();
      }
      else if (mouseX < centerX && mouseX >= 0 && slope(mouseX, mouseY, centerX, centerY) <= bottomDiag){
        reflectXtop();
      }
      else if (mouseX < centerX && mouseX >= 0 && slope(mouseX, mouseY, centerX, centerY) < topDiag && slope(mouseX, mouseY, centerX, centerY) > bottomDiag){ 
        reflectY();
      }
      
  // These functions needed to be inside the draw function because of the variables they used and global variables get tricky with mouseX or height for example.
      // This function reflects the colored line when the reflected line ends on the y axis
          function reflectY(){
              stroke(r, g, b, 170);
              strokeWeight(3);
              line(0, height - mouseY, centerX, centerY);
          }
      // This function reflects the colored line when the reflected line ends on the X AXIS
          function reflectXtop(){
              stroke(r, g, b, 170);
              strokeWeight(3);
              line(mouseX, 0, centerX, centerY);
          } 
      // This function reflects the colored line when the reflected line ends on the BOTTOM of the canvas
          function reflectXbottom(){
              stroke(r, g, b, 170);
              strokeWeight(3);
              line(mouseX, height, centerX, centerY);
          }
}

// Changes color for mirror and reflection lines to random values
  function changeColor(){
      r = random(0, 255);
      g = random(0, 150)
      b = random(0, 255); 
  }

// Slope formula, allows me to set the conditional for when the reflected line should switch between the different sections of lines. The lines the reflection lines switch over have slopes of 0.66 and -0.66
  function slope(x1, y1, x2, y2){
    let m = (y2 - y1) / (x2 - x1);
    return m;
  }
