let xPos = 150;
let yPos = 150;
let diam = 100;
let myName = 'Shayla';

function setup(){
	createCanvas(800, 800);
	background(200);
	noLoop();
	noStroke();
	colorMode(HSB);
}

function sayHi(myName){
	console.log(`This is my first function and it logs ${myName} to the console.`);
}

function draw(){
	sayHi(myName);
	const randFill = random(0, 360);
	fill(randFill, 100, 100);
	circle(xPos, yPos, diam);

	fill(randFill * 2, 100, 100);
	circle(xPos + 100, yPos + 100, diam);

	fill(randFill * .5, 100, 100);
	circle(xPos + 200, yPos + 200, diam);

	fill(randFill + 150, 100, 100);
	circle(xPos + 300, yPos + 300, diam);

	fill(randFill - 150, 100, 100);
	circle(xPos + 400, yPos + 400, diam);
	// console.log(randFill);
}