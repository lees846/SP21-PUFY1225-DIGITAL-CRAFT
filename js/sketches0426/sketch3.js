// The goal is to have the reflection lines leave/meet the edge of the canvas despite where the mouse might be, but to maintain a reflection that is the inverse of the way the user's line hits the reflection point.


function setup(){
	createCanvas(800, 800);
	background(0);
}

function draw(){
	
	background(0);
	stroke(255);

	// "mirror" line
		strokeWeight(1);
		line(0.75 * width, 0, 0.75 * width, height);
	
	// reflection line(s)
		// red line
			if (mouseX < 0.75 * width && mouseX >= 0){	
				reflectY();
			}
		
		// yellow line
			if (mouseX < 0.75 * width && mouseX >= 0 && mouseY <= 0.5 * height){	
				reflectXbottom();
			}
			else if (mouseX < 0.75 * width && mouseX >= 0){
				reflectXtop();
			}
		
		/*// control reflection line
			function reflectY(){
				stroke(0, 0, 255, 170);
				strokeWeight(3);
				line(mouseX, height - mouseY, 0.75 * width, 0.5 * height);
		}*/
	
	// light source
		if (mouseX < 0.75 * width){
			stroke(255);
			strokeWeight(3);
			line(mouseX, mouseY, 0.75 * width, 0.5 * height);
		}
}

// This function is the RED line for when the reflected line would end on the y axis
	function reflectY(){
		stroke(255, 0, 0, 170);
		strokeWeight(3);
		line(0, height - mouseY, 0.75 * width, 0.5 * height);
	}
// This function reflects the YELLOW line when the reflected line would end on the X AXIS
	function reflectXtop(){
		stroke(255, 255, 0, 170);
		strokeWeight(3);
		line(mouseX, 0, 0.75 * width, 0.5 * height);
	}	
// This function reflects the YELLOW line when the reflected line would end on the BOTTOM of the canvas
	function reflectXbottom(){
		stroke(255, 255, 0, 170);
		strokeWeight(3);
		line(mouseX, height, 0.75 * width, 0.5 * height);
	}


// The thing I don't know how to do is set a conditional to switch to one line or another when the mouse crosses the line which runs diagonally from the left corners of the canvas to the reflection point. I found that p5 has a reflect function that I might try out