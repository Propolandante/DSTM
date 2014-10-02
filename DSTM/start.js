// This file handles all of the functions concerning the DELIVER state

startInitialize = function() {
	
	// TODO this should only be called the first frame after the state change.
	var titleButton = new Button(0, 0, 720, 720, null);
	titleButton.onClick = function(){
		Game.state = "LISTEN";
		buttons = [];
	};
	
	buttons.push(titleButton);
		
	
};

drawStart = function(){
	drawTitle();
};

// drawChoiceBox = function() {
// 	
	// boxHeight = 250;
	// boxWidth = CANVAS_WIDTH;
// 	
	// Game.context.fillStyle = "#292929";
	// Game.context.fillRect(0, CANVAS_HEIGHT - boxHeight, boxWidth, boxHeight);
// 	
// };

drawTitle = function() {
	
	Game.context.drawImage(images[imgNames.indexOf("Title")], 0, 0);
};

//drawInfo = function() {
// 	
	// infoString = "Jul 24 Press Conference";
// 	
	// Game.context.font = "italic 20px arial";
	// Game.context.fillStyle = "#FFFFFF";
	// Game.context.fillText(infoString, 50, 35);
// 	
// };
