function snakePosition() {
	for (var i = 0; i < rry.length; i++) {
		for (var j = 0; j < rry[i].length; j++) {
			if (rry[i][j] === 1) {
				
				var position = {
					row: rry[i],
					rowIndex: i,
					index: j
				};
				return position;
			}
		};
	};
}

var right;
var left;
var up;
var down;

var h1 = [0,0,0,0]; // 1 x 4 map. 
var h2 = [1,0,0,0];

var rry = [h1,h2]

function snakeMoveDown() {
	var position = snakePosition();

	if (position.row === h2 /* change depending on grid size */) {
		console.log("you lose down");
		clearInterval(down);
	} else {	
		var tmp = rry[position.rowIndex + 1];
		position.row[position.index] = 0;
		tmp[position.index] = 1;
	}
	console.log(h1, h2)
}


function snakeMoveUp() {
	var position = snakePosition();

	if (position.row === h1) {	
		console.log("you lose up");
		clearInterval(up);
	} else {							
		var tmp = rry[position.rowIndex - 1];	// tmp is next row up.
		position.row[position.index] = 0;	// original place. 
		tmp[position.index] = 1;	// new row// same index.
	}
	console.log(h1, h2)
}



function snakeMoveLeft() {
	var position = snakePosition();

	if (position.index === 0) {
		console.log("you lose");
		clearInterval(left);

	} else {	
		var tmp = position.row[position.index];
		position.row[position.index] = 0;
		position.row[position.index - 1] = 1;
	}
	console.log(h1, h2)
}


function snakeMoveRight() {

	var position = snakePosition();

	if (position.index === 3) {
		console.log("you lose");
		clearInterval(right);
	} else {	
		position.row[position.index] = 0;
		position.row[position.index + 1] = 1;
	}
	console.log(h1, h2)
}


// basically I need to appropiately place a clearInterval AND setInterval. 

// Okay, issue is scope of 



function snakeMovementEvent(event) {
	console.log(event.keyCode)
	
	if (event.keyCode === 115) {
		
		clearInterval(left);
		clearInterval(down);
		clearInterval(up);

		right = setInterval(snakeMoveRight, 1000);

	} else if (event.keyCode === 97){
		
		clearInterval(right);
		clearInterval(down);
		clearInterval(up);

		left = setInterval(snakeMoveLeft, 1000);

	} else if (event.keyCode === 114) {
		
		clearInterval(right);
		clearInterval(left);
		clearInterval(up);

		down = setInterval(snakeMoveDown, 1000);

	} else if (event.keyCode === 119) {
		
		clearInterval(right);
		clearInterval(left);
		clearInterval(down);

		up = setInterval(snakeMoveUp, 1000);

	} else {
		return
	}
}

addEventListener('keypress', snakeMovementEvent)



/*


	if (event.keyCode === 115) {
		var right = setInterval(snakeMoveRight, 1000);
	} else if (event.keyCode === 97){
		var left = setInterval(snakeMoveLeft, 1000);
	} else {
		return 
	}
}



*/
