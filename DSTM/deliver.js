// This file handles all of the functions concerning the DELIVER state

deliverInitialize = function() {
	
	// TODO this should only be called the first frame after the state change.
	
	drawChoiceBox();
	drawScene();
	drawInfo();
	
};

drawChoiceBox = function() {
	
	boxHeight = 250;
	boxWidth = CANVAS_WIDTH;
	
	Game.context.fillStyle = "#292929";
	Game.context.fillRect(0, CANVAS_HEIGHT - boxHeight, boxWidth, boxHeight);
	
};

drawScene = function() {
	
	sceneImage = new Image();
	sceneImage.src = "images/DSTM_deliver_placeholder.png";
	Game.context.drawImage(sceneImage, 0, 0);
};

drawInfo = function() {
	
	infoString = "Jul 24 Press Conference";
	
	Game.context.font = "italic 20px arial";
	Game.context.fillStyle = "#FFFFFF";
	Game.context.fillText(infoString, 50, 35);
	
};