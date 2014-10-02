// The main script.

// set up the game's canvas
var canvas = document.getElementById('canvas');
var CANVAS_WIDTH = 720;
var CANVAS_HEIGHT = 720;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// set up the FPS counter in the top right
var stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.right = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);



Game.initialize();


Game.run = function() {
	setInterval(function() {
		Game.draw();
		Game.update();
		
		// Update fps counter
		stats.update();
	}, 1000 / Game.fps);
};

Game.run();
