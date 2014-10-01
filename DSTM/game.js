var Game = {};
var keysDown = {};

var imagesrc = [];
var imgNames = [];
var images = [];

// Game variables
Game.fps = 50;
Game.state = "";
// valid states: "START", "LISTEN", "PLAN", "DELIVER"
Game.prevState = "";

Game.initialize = function() {
	//this.changeState("DELIVER"); // this should initialize to START, for the start menu
	this.context = canvas.getContext('2d');
	Game.state = "DELIVER";

	imgNames.push("ListenBG");
	imagesrc.push("images/powersthatbe_bg.png");
	imgNames.push("DeliverBG");
	imagesrc.push("images/DSTM_deliver_placeholder.png");
	
	// start preloading
    for(i=0; i < imagesrc.length; i++) 
    {
         images.push(new Image());
         images[i].src = imagesrc[i];
    }
	
};

Game.draw = function() {
	this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	switch (Game.state) {
	case "START":
		break;
	case "LISTEN":
		drawListen();
		break;
	case "PLAN":
		break;
	case "DELIVER":
		deliverInitialize();

		break;
	}

};

Game.update = function() {
	//check for input
	for (var key in keysDown) {
		var value = Number(key);
		lastkey = value;
		switch (value) {
		case 49:	// 1
			Game.state = "START";
			break;
		case 50:	// 2
			Game.state = "LISTEN";
			break;
		case 51:	// 3
			Game.state = "PLAN";
			break;
		case 52:	// 4
			Game.state = "DELIVER";
			break;
		}
	}
};

window.addEventListener("keydown", function(event) {
	keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
	delete keysDown[event.keyCode];
});
