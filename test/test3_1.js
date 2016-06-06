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

var h1 = [0,0,0,0]; // 1 x 4 map. 
var h2 = [1,0,0,0];

var rry = [h1,h2]

function snakeMoveLeft() {
	var position = snakePosition();

	if (position.index === 0) {
		console.log("you lose");
	} else {	
		var tmp = position.row[position.index];
		position.row[position.index] = 0;
		position.row[position.index - 1] = 1;
	}
	console.log(h2)
}


function snakeMoveRight() {

	var position = snakePosition();

	if (position.index === 3) {
		console.log("you lose");
	} else {	
		position.row[position.index] = 0;
		position.row[position.index + 1] = 1;
	}
	console.log(h2)
}


// basically I need to appropiately place a clearInterval AND setInterval. 

// Okay, issue is scope of 

var right;
var left;

function snakeMovementEvent(event) {
	console.log(event.keyCode)
	if (event.keyCode === 115) {
		clearInterval(left);
		right = setInterval(snakeMoveRight, 1000);

	} else if (event.keyCode === 97){
		clearInterval(right);
		left = setInterval(snakeMoveLeft, 1000);

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
