const xPos= 100;
const yPos= 100;
const width= 100;
const height= 100;
let color= 100

function setup(){
	createCanvas(600, 600);
	noLoop();
}

function draw(){
	background(150);
	fill(100);
	stroke(0);
	strokeWeight()
	// rectangle 1
	rect(xPos, yPos, width, height);
	// rectangle 2
	fill(color / 2);
	rect(xPos * 2, yPos * 2, width / 2, height / 2);
	// rectangle 3
	fill(color * 4);
	rect(xPos * 3, yPos + 150, width, height);
	// rectangle 4
	fill(color / 4);
	rect(xPos * 4, yPos * 4, width, height);
	// rectangle 5
	fill(color + 100)
	rect(xPos - 30, yPos * 3, width + 50, height / 3);
	// rectangle 6
	fill(color + 100)
	rect(xPos + 270, yPos * 1.5, width + 50, height / 3);
}