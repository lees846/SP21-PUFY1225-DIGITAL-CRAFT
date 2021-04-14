// variables for internal matrix of dream catcher
const xPos= 300;
const yPos= 250;
const diam= 200;

// variables for feathers and string
const centerX= 288;
const changeX= 112;
const featherX= 10;
const featherY= 200;

// variables for chains
const ring= 20;
const linkY= 418;
const linkH= 129;

function setup(){
	createCanvas(800, 800)
	noFill();
}
function draw(){
	background(200, 220, 230);
	angleMode(DEGREES);
	
	// Testing out location of points on the sketch
		// ellipse(xPos + 200, yPos, 100, 100);
		// ellipse(xPos + 200, yPos, 200, 200);

	// TOP STRING and RING
		strokeWeight(5);
		line(400, 0, 400, 80);
		ellipse(400, 86, ring, ring);

	// DREAM CATCHER HOOP
		strokeWeight(13);
		stroke(100);
		ellipse(400, 247, 290, 290);

	// LINES for INTERNAL MATRIX
		strokeWeight(5);
	// left and right (center point change in x)
		arc(xPos, yPos, diam, diam, 270, 90);
		arc(xPos + 200, yPos, diam, diam, 90, 270);
	// up and down (center point change in y)
		arc(xPos + 100, yPos + 100, diam, diam, 180, 0);
		arc(xPos + 100, yPos - 103, diam, diam, 0, 180);
	// top to sides (center point change in x)
		arc(xPos + 30, yPos - 73, diam, diam, 310, 140);
		arc(xPos + 170, yPos - 73, diam, diam, 40, 230);
	// sides to bottom (center point change in x)
		arc(xPos + 25, yPos + 68, diam, diam, 230, 50);
		arc(xPos + 175, yPos + 68, diam, diam, 140, 310);

	// CHAINS
		strokeWeight(5);
	// chain left
		ellipse(centerX, 365, ring, ring);
		line(centerX, 370, centerX, 400);
		ellipse(centerX, 405, ring, ring);
	// chain middle
		ellipse(centerX + changeX, 408, ring, ring);
		line(centerX + changeX, 413, centerX + changeX, 445);
		ellipse(centerX + changeX, 450, ring, ring);
	// chain right
		ellipse(centerX + 2 * changeX, 365, ring, ring);
		line(centerX + 2 * changeX, 370, centerX + 2 * changeX, 400);
		ellipse(centerX + 2 * changeX, 405, ring, ring);

	// FEATHERS
		strokeWeight(8);
	// feather left
		line(centerX, linkY, centerX, 445);
		ellipse(centerX, linkY + linkH, featherX, featherY);
	// feather middle
		line(centerX + changeX, linkY + 43, centerX + changeX, 489);
		ellipse(centerX + changeX, linkY + 43 + linkH, featherX, featherY);
	// feather right
		line(centerX + 2 * changeX, linkY, 512, 445);
		ellipse(centerX + 2 * changeX, linkY + linkH, featherX, featherY);
}