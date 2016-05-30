// Make the snake move left - 30-05-16 Works, easy. 
// Grid should be 41h by 801w, so it's just single lane. 

function snakeMovement() { 
	var snake = document.getElementById("snake");
	var pos = 0;
	var id = setInterval(moveleft, 10);
	function moveleft() {
		if (pos === 760 || pos === 40) {
			clearInterval(id);
		} else {
			pos++;
			snake.style.left = pos + 'px';

		}
	}
}


snakeMovement();

