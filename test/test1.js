
var h1 = [0,0,0,0]; // 1 x 4 map. 
var h2 = [0,1,0,0];

var rry = [h1,h2]

// snake is going to represent 1; 

function snakePosition() {
	for (var i = 0; i < rry.length; i++) {
		for (var j = 0; j < rry[i].length; j++) {
			if (rry[i][j] === 1) {	
				console.log("we found it")
			}
		};
	};
}

snakePosition();
/*


function snakeMoveRight() { 

	snakePosition();	
	for (var i = 0; i < map.length; i++) {
		if (map[i] === 1) {	
			var tmp = map[i]
								// find snake position
			if (map[i] === map[map.length -1]) {	// if snake hits wall: lose
				alert("You lose!")
			} else {	
					tmp = map[i];					// move 
					map[i] = 0;
					map[i + 1] = 1;
					console.log(map)	
			}
		}
	};	
}


*/


