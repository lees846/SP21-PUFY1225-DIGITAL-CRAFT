// Functions and Random Values
// This is me trying to refactor and understand random values and functions

// COLOR
	// variable for green
		const g= 100;
	// variable for change in opacity
		const opacPos= 70;
		const opacNeg= 70;

//LOCATION
 	// origin of purple squares
 		const purp= 100;
 	// origin of red squares
 		const red= 300;
 	// origin of center squares
 		const center= 100;

// I have the frame rate at a kind of relaxing pace
function setup(){
	createCanvas(800, 800);
	frameRate(.5);
	noStroke();
}

function draw(){
	// random variables for the r and b values
		const randBlue = random(255);
		const randRed = random(255);

	// the effect changes based on the background color, black gives it a glow while lighter shades look more basically transparent
		background(0);

	// Center Squares
		fill(randBlue, g, randBlue, opacPos)
		square(center, 100, 600)

		square(2 * center, 200, 400)

	// Red Squares
		fill(randBlue, g, randRed, opacUp(opacNeg));
		square(red - 100, red - 100, 500);

		fill(randBlue, g, randRed, opacUp(opacNeg));
		square(red, red, 400);

		fill(randBlue, g, randRed, opacUp(opacNeg));
		square(red + 100, red + 100, 300);

		fill(randBlue, g, randRed, opacUp(opacNeg));
		square(red + 200, red + 200, 200);

		fill(randBlue, g, randRed, opacUp(opacNeg));
		square(red + 300, red + 300, 100);

	// Purple Squares
		fill(randRed, g, randBlue, opacUp(opacPos));
		square(purp, purp, 100);

		fill(randRed, g, randBlue, opacUp(opacPos));
		square(purp, purp, 200);

		fill(randRed, g, randBlue, opacUp(opacPos));
		square(purp, purp, 300);

		fill(randRed, g, randBlue, opacUp(opacPos));
		square(purp, purp, 400);

		fill(randRed, g, randBlue, opacUp(opacPos));
		square(purp, purp, 500);	
}

function opacUp(val){
	val += 50;
	return 205 - val;
}

