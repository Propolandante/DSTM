// This file handles all of the functions concerning the DELIVER state

deliverInitialize = function() {
	
	// TODO this should only be called the first frame after the state change.
	
	drawChoiceBox();
	drawDeliverScene();
	drawInfo();
	
};

drawChoiceBox = function() {
	
	boxHeight = 250;
	boxWidth = CANVAS_WIDTH;
	
	Game.context.fillStyle = "#292929";
	Game.context.fillRect(0, CANVAS_HEIGHT - boxHeight, boxWidth, boxHeight);
	
};

drawDeliverScene = function() {
	
	Game.context.drawImage(images[imgNames.indexOf("DeliverBG")], 0, 0);
};

drawInfo = function() {
	
	infoString = null;
	infoId = "DAY_001_TITLE_A";
	
	for (var i = 0; i < Game.strings.length; ++i)
	{
		if (Game.strings[i].Identifier === infoId)
		{
			infoString = Game.strings[i].String;
		}
	}
	
	if (!infoString)
	{
		console.log("No infoString!");
	}
	
	Game.context.font = "italic 20px arial";
	Game.context.fillStyle = "#FFFFFF";
	Game.context.fillText(infoString, 50, 35);
	
};

drawChoices = function() {
	
};
