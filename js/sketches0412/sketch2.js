// COLOR
	// variables for purple
		let r= 100;
		let g= 100;
		let b= 200;
	// variable for change in opacity
		const opac= 50;
//LOCATION
 	// origin of purple squares
 		const purp= 100;
 	// origin of red squares
 		const red= 300;
 	// origin of pink squares
 		const pink= 100;

function setup(){
	createCanvas(800, 800);
	noLoop();
	noStroke();
}

function draw(){
	// the effect changes based on the background color, black gives it a glow while lighter shades look more basically transparent
		background(0);

	// Pink Squares
		fill(b, g, b, opac)
		square(pink, 100, 600)

		square(2 * pink, 200, 400)

	// Purple Squares
		fill(r, g, b, 255 - opac);
		square(purp, purp, 100);

		fill(r, g, b, 255 - 2 * opac);
		square(purp, purp, 200);

		fill(r, g, b, 255 - 3 * opac);
		square(purp, purp, 300);

		fill(r, g, b, 255 - 4 * opac);
		square(purp, purp, 400)

	// Red Squares
		fill(b, g, r, 255 - 4 * opac);
		square(red, red, 400)

		fill(b, g, r, 255 - 3 * opac);
		square(red + 100, red + 100, 300)

		fill(b, g, r, 255 - 2 * opac);
		square(red + 200, red + 200, 200)

		fill(b, g, r, 255 * opac);
		square(red + 300, red + 300, 100)
}