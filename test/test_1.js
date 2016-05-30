// Let's add a keypress and event listener for left. 
// Grid should be 41h by 801w, so it's just single lane. 


function snakeMovementLeft() { 
	var snake = document.getElementById("snake");
	var pos = 0;
	var id = setInterval(moveleft, 5);
	function moveleft() {
		if (pos === 760) {
			clearInterval(id);
		} else {
			pos++;
			snake.style.left = pos + 'px';

		}
	}
}


addEventListener('keypress', function(event) { 
	console.log(event.keyCode);
	if (event.keyCode === 97) {
		snakeMovementLeft();
	} else {
		return
	}
});





// left 37 up 38 right 39 down 40