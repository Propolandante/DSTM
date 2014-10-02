// This file handles all of the functions concerning the DELIVER state

listenInitialize = function() {

	// TODO this should only be called the first frame after the state change.

	//drawChoiceBox();
	drawListenScene();
	//drawInfo();

};

drawListen = function() {
	drawListenScene();
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

drawListenScene = function() {

	Game.context.drawImage(images[imgNames.indexOf("ListenBG")], 0, 0);
	Game.context.drawImage(images[imgNames.indexOf("Paper")], 87, 290);

	Game.context.drawImage(images[imgNames.indexOf("RedDot")],344,124);
	
	var text = "The last guy fucked up. he’s been…nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn";
	Game.context.globalAlpha = (Math.floor(Math.random() * 3) + 7)/10;
	Game.context.font = "italic 20px arial";
	Game.context.textAlign = "center";
	Game.context.fillStyle = "#ff0000";
	Game.context.fillText(text, 360, 230);
	
	
	var textWidth = $('<span></span>').css({display:'none',whiteSpace:'nowrap'}).appendTo($('body')).text(text).width();

	for ( i = 0; i < 10; i++) {
		Game.context.globalAlpha = (Math.floor(Math.random() * 3) + 7)/10;
		Game.context.lineWidth = Math.floor(Math.random() * 2) + 1;
		Game.context.beginPath();
		Game.context.moveTo(360, 140);
		Game.context.lineTo(Math.floor(Math.random() * textWidth) + 360-textWidth/2, 210);
		Game.context.strokeStyle = "#ff0000";
		Game.context.stroke();
	}
	
	Game.context.globalAlpha = 1;
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
