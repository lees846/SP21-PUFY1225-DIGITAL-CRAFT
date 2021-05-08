// The goal is to have the reflection lines leave/meet the edge of the canvas despite where the mouse might be, but to maintain a reflection that is the inverse of the way the user's line hits the reflection point.


function setup(){
	createCanvas(800, 800);
	background(0);
    // frameRate(10);
}

function draw(){
	//setting center/reflection point
      const centerX = 0.75 * width;
      const centerY = 0.5 * height;
    //setting lines that are the point where the code will detect that it needs to switch which line is shown
      const topDiag = slope(0, 0, centerX, centerY);
      const bottomDiag = slope(centerX, centerY, 0, height);
    // for random color
      let randR = random(0, 255);
      let randG = random(0, 150)
      let randB = random(0, 255);
  
	background(0);

	// mirror
        if(mouseIsPressed == true){
          console.log("pressed");
          stroke(randR, randG, randB);
        }
          strokeWeight(10);
          line(centerX, 0, centerX + 10, height);

	// reflection line(s), I set a conditional that only draws to the left of the mirror and one that explains when each line should be shown with regards to the mouse position
			if (mouseX < centerX && mouseX >= 0 && mouseY <= centerY && slope(mouseX, mouseY, centerX, centerY) >= topDiag){	
				reflectXbottom();
			}
			else if (mouseX < centerX && mouseX >= 0 && slope(mouseX, mouseY, centerX, centerY) <= bottomDiag){
				reflectXtop();
			}
			else if (mouseX < centerX && mouseX >= 0 && slope(mouseX, mouseY, centerX, centerY) < topDiag && slope(mouseX, mouseY, centerX, centerY) > bottomDiag){	
				reflectY();
			}
			
    // light source
		if (mouseX < centerX){
			stroke(255);
			strokeWeight(3);
			line(mouseX, mouseY, centerX, 0.5 * height);
		}
  
		/*// control reflection line
			function reflectY(){
				stroke(0, 0, 255, 170);
				strokeWeight(3);
				line(mouseX, height - mouseY, centerX, centerY);
		}*/
	
	
      // This function reflects the colored line when the reflected line ends on the y axis
          function reflectY(){
              stroke(255, 0, 0, 170);
              strokeWeight(3);
              line(0, height - mouseY, centerX, centerY);
          }
      // This function reflects the colored line when the reflected line ends on the X AXIS
          function reflectXtop(){
              stroke(255, 0, 0, 170);
              strokeWeight(3);
              line(mouseX, 0, centerX, centerY);
          }	
      // This function reflects the colored line when the reflected line ends on the BOTTOM of the canvas
          function reflectXbottom(){
              stroke(255, 0, 0, 170);
              strokeWeight(3);
              line(mouseX, height, centerX, centerY);
          }
}


// Slope formula, allows me to set the conditional for when the reflected line should switch between the different sections of lines
  function slope(x1, y1, x2, y2){
    let m = (y2 - y1) / (x2 - x1);
    return m;
  }



// The thing I don't know how to do is set a conditional to switch to one line or another when the mouse crosses the line which runs diagonally from the left corners of the canvas to the reflection point. I found that p5 has a reflect function that I might try out