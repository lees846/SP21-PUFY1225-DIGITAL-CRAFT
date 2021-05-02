// Start of Rainbow 
	let angle1 = 320;
// Opacity of rainbow colors
	const bowOpac = 170;

function setup(){
	createCanvas(650, 500);
	background(0);
	// noLoop();
	angleMode(DEGREES);
}

function draw(){
	// Live updating mouse function
	background(0);	

	// Prism triangle
		stroke(255);
		strokeWeight(1);
		fill(255, 255, 255, 50)
		triangle(240, 350, 300, 250, 360, 350);
	
	// Light from mouse
		stroke(200);
		strokeWeight(5);
		line(mouseX, mouseY, 300, 300);	
	
	// making the rainbow only visible when the mouse line is in and coming from a certain location
		if (mouseY < 320 && mouseY > 280 && mouseX < 300){
			rainbow();
		} 	
}

// Function to evenly increment rainbow degrees
	function addAngle(startDeg){
		return startDeg + 4;
	}

// Rainbow color creation
	function rainbow(){
		noStroke();
		// Red
			fill(255, 0, 0, bowOpac);
			arc(300, 300, 700, 700, angle1, addAngle(angle1));

		// Orange
			angle1 = addAngle(angle1);
			fill(250, 150, 0, bowOpac);
			arc(300, 300, 700, 700, angle1, addAngle(angle1));

		// Yellow
			angle1 = addAngle(angle1);
			fill(250, 200, 0, bowOpac);
			arc(300, 300, 700, 700, angle1, addAngle(angle1));

		// Green
			angle1 = addAngle(angle1);
			fill(100, 200, 0, bowOpac);
			arc(300, 300, 700, 700, angle1, addAngle(angle1));

		// Blue
			angle1 = addAngle(angle1);
			fill(0, 100, 200, bowOpac);
			arc(300, 300, 700, 700, angle1, addAngle(angle1));

		angle1 = 320;
	}
