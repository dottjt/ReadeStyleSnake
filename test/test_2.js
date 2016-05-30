// Modularise program 
// Grid should be 41h by 801w, so it's just single lane. 


var xpos = 0;
var ypos = 0;
var snake = document.getElementById("snake");

console.log(xpos);
console.log(ypos);

function snakeMovementLeft() { 
	var id = setInterval(moveleft, 5);

	function moveleft() {
		if (xpos === 760) {
			clearInterval(id);
		} else {
			xpos++;
			snake.style.left = xpos + 'px';
		}
	}
}

function snakeMovementEvent(event) {
	if (event.keyCode === 115) {
		snakeMovementRight();
	} else if (event.keyCode === 97) {
		snakeMovementLeft();
	} else {
		return
	}
}

addEventListener('keypress', snakeMovementEvent);





// left 37 up 38 right 39 down 40