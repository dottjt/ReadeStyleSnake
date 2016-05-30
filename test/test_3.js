// Add move right functionality 
// Modularise program 
// Grid should be 41h by 801w, so it's just single lane. 

var xpos = 0;
var ypos = 0;
var snake = document.getElementById("snake");

console.log(xpos);
console.log(ypos);

function snakeMovementRight() { 
	
	var id = setInterval(moveright, 10);

	function moveright() {
		if (xpos === 760 || 40) {
			clearInterval(id);
		} else {
			xpos--;
			snake.style.left = pos + 'px'; // left is right and vice-versa. 
		}	
	}
}

function snakeMovementLeft() { 
	var id = setInterval(moveleft, 5);

	function moveleft() {
		if (xpos === 760) {
			clearInterval(id);
		} else {
			xpos--;
			snake.style.left = xpos + 'px';
		}
	}
}

function snakeMovementRight() { 
	var id = setInterval(moveright, 5);

	function moveright() {
		if (xpos === 760) {
			clearInterval(id);
		} else {
			xpos++;
			snake.style.right = xpos + 'px';
		}
	}
}


function snakeMovementEvent(event) {
	console.log(event.keyCode)
	if (event.keyCode === 115) {
		snakeMovementRight();
	} else if (event.keyCode === 97) {
		snakeMovementLeft();
	} else {
		return
	}
}

addEventListener('keypress', snakeMovementEvent);
