
let angle1 = 320;

function setup(){
	createCanvas(650, 500, SVG);
	background(0);
	noLoop();
	angleMode(DEGREES);
}

function draw(){
	// Prism triangle
		stroke(255);
		fill(255, 255, 255, 50)
		triangle(240, 350, 300, 250, 360, 350);
	
	// Light from Left
		stroke(200);
		line(50, 330, 300, 300);

	noStroke();
	// Red
		fill(255, 0, 0);
		arc(300, 300, 700, 700, angle1, addAngle(angle1));

	// Orange
		angle1 = addAngle(angle1);
		fill(250, 150, 0);
		arc(300, 300, 700, 700, angle1, addAngle(angle1));

	// Yellow
		angle1 = addAngle(angle1);
		fill(250, 200, 0);
		arc(300, 300, 700, 700, angle1, addAngle(angle1));

	// Green
		angle1 = addAngle(angle1);
		fill(100, 200, 0);
		arc(300, 300, 700, 700, angle1, addAngle(angle1));

	// Blue
		angle1 = addAngle(angle1);
		fill(0, 100, 200);
		arc(300, 300, 700, 700, angle1, addAngle(angle1));		
// save();	
}

function addAngle(startDeg){
	return startDeg + 4;
}


