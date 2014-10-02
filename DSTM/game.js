var Game = {};
var keysDown = {};
var mousePoint;
var buttons = [];
var hoverButton = null;
var prevHoverButton;

var imagesrc = [];
var imgNames = [];
var images = [];

// var mouseIsDown = false;
// var mouseWasDown = false;

// Game variables
Game.fps = 50;
Game.state = "";
// valid states: "START", "LISTEN", "PLAN", "DELIVER"
Game.prevState = "";


Game.initialize = function() {
	//this.changeState("DELIVER"); // this should initialize to START, for the start menu
	this.context = canvas.getContext('2d');
	canvas.addEventListener("mousedown", clickButton, false);
	canvas.addEventListener("mousemove", getMousePos, false);
	Game.state = "DELIVER";
	
	Game.strings = null;
	
	// load the game's Strings
	Papa.parse("/DSTM/strings/strings.csv", {
	download: true,
	header: true,
	complete: function(results) {
		// TODO game should not start until this has completed
		console.log("Remote file parsed!", results);
		Game.strings = results.data;
		
		
	}
});
	
	imgNames.push("ListenBG");
	imagesrc.push("images/powersthatbe_bg.png");
	imgNames.push("DeliverBG");
	imagesrc.push("images/deliver_bg.png");
	imgNames.push("Paper");
	imagesrc.push("images/paper.png");
	
	// start preloading
    for(i=0; i < imagesrc.length; i++) 
    {
         images.push(new Image());
         images[i].src = imagesrc[i];
    }
	
};

Game.draw = function() {
	this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	// state-specific draw calls
	switch (Game.state) {
	case "START":
		break;
	case "LISTEN":
		if(Game.prevState !== Game.state)
		{
			drawListen();
		}
		break;
	case "PLAN":
		break;
	case "DELIVER":
		if(Game.prevState !== Game.state)
		{
			deliverInitialize();
		}
		deliverDraw();
		break;
	}
	
	// general draw calls
	drawButtons();
	
	
	Game.prevState = Game.state;

};

Game.update = function() {
	
	// check if mouse is interacting with any buttons
	
	if (hoverButton)
	{
		prevHoverButton = hoverButton;
		hoverButton = null;
	}
	
	for (var i = 0; i < buttons.length; ++i)
	{
		if(!mousePoint){console.log("No MousePoint");break;}
		if(!buttons[i]){console.log("No Button");break;}
		
		if((mousePoint.x >= buttons[i].x 
			&& mousePoint.x <= buttons[i].x + buttons[i].width) 
			&& (mousePoint.y >= buttons[i].y 
			&& mousePoint.y <= buttons[i].y + buttons[i].height))
		{
			if(!hoverButton)
			{
				hoverButton = buttons[i];
			}
			else
			{
				console.log("ERROR! Overlapping buttons!");
			}
			
		}
	}
	
	// handle button hover/unhover logic
	
	if (hoverButton != prevHoverButton)
	{
		// if we've just started hovering over a button
		if (hoverButton)
		{
			// and it has an onHover() function
			if(hoverButton.onHover())
			{
				// call that function
				hoverButton.onHover();
			}
		}
		// if we've just STOPPED hovering over a button
		else
		{
			// and it has an offHover() function
			if(prevHoverButton.offHover())
			{
				// call that function
				prevHoverButton.offHover();
			}
		}
	}
	
	
	
	//check for keyboard input
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
drawButtons = function() {
	// loop through all the buttons in the game and call their draw() function
	
	for (var i = 0; i < buttons.length; ++i)
	{
		// if this button has a draw function
		if(buttons[i].draw())
		{
			// call that function
			buttons[i].draw();
		}
	}
};


getMousePos = function(event) {
	
	var rect = canvas.getBoundingClientRect();
	mousePoint = {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
	//console.log("x: " + mousePoint.x + " y: " + mousePoint.y);
};

clickButton = function() {
	
	if(hoverButton)
	{
		if(hoverButton.onClick())
		{
			hoverButton.onClick();
		}
		else
		{
			console.log("No onClick method for " + hoverButton.id);
		}
	}
	else
	{
		console.log("Clicked nothing.");
	}
	
};

window.addEventListener("keydown", function(event) {
	keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
	delete keysDown[event.keyCode];
});
