// This file handles all of the functions concerning the DELIVER state

var boxHeight = null;
var boxWidth = null;

deliverInitialize = function() {
	
	// TODO this should only be called the first frame after the state change.
	
	drawChoiceBox();
	drawDeliverScene();
	drawInfo();
	drawChoices("ALIEN_000_STA");
	
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
	Game.context.fillStyle = "#000000";
	Game.context.fillText(infoString, 50, 35);
	
};

/*
 * drawChoices example:
 * 
 * Say you want to grab all the choices for the opening statement
 * of ALIEN_000. Then, your function call will be:
 * drawChoices("ALIEN", "000", "STA");
 * And it will grab ALIEN_000_STA_A, ALIEN_000_STA_B, and ALIEN_000_STA_C
 */

drawChoices = function(tag, prev) {
	var choices = [];
	var match = tag;
	var follows = "";
	if (prev)
	{
		// just grabs the letter at the end of the Identifier
		follows = prev.substr(prev.length - 1);
	}
	
	// First, load the available choices into the choices[] array
	for (var i = 0; i < Game.strings.length; ++i)
	{
		// if match is a substring of the Identifier, this returns true
		if (Game.strings[i].Identifier.indexOf(match) > -1)
		{
			// if follows is a substring of the FollowsFrom, this returns true
			
			if (follows !== "" && Game.strings[i].Follows.indexOf(follows) > -1)
			{
				//console.log("Pushing " + Game.strings[i].Identifier);
				choices.push(Game.strings[i]);
			}
			else if (follows === "" && Game.strings[i].Follows === "")
			{
				//console.log("Pushing " + Game.strings[i].Identifier);
				choices.push(Game.strings[i]);
			}
		}
		
	}
	
	// Next, count the number of choices to determine where they will be drawn on screen
	var drawHeight =  CANVAS_HEIGHT - (boxHeight / (choices.length + 1) * choices.length);
	
	// Next, draw each of the choices
	Game.context.font = "16px arial";
	Game.context.fillStyle = "#E6E6E6";
	var textWidth = boxWidth - 100;
	
	for (var i = 0; i < choices.length; ++i)
	{
		wrapText(choices[i].String, 50, drawHeight, textWidth, 18);
		
		// set the drawHeight for the next iteration
		drawHeight += boxHeight / (choices.length + 1);
	}
	
};
