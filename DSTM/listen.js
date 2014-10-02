// This file handles all of the functions concerning the DELIVER state

var briefing = [];
var briefIndex = 0;
var nextButton = null;

listenInitialize = function() {

	// TODO this should only be called the first frame after the state change.
	
	briefing = getBriefing();
	
	// initialize the NEXT button
	nextButton = new Button(0,0,CANVAS_WIDTH,CANVAS_HEIGHT,null);
	nextButton.draw = function()
	{
		// invisible button
	};
	nextButton.onClick = function()
	{
		if(briefing[briefIndex].End != "TRUE")
		{
			briefIndex++;
		}
		else
		{
			Game.state = "DELIVER";
			buttons = [];
		}
	};
	
	buttons.push(nextButton);
	
	drawListenScene();

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
	
	// grab the correct string
	var text = null;
	if (briefing[briefIndex] != null)
	{
		text = briefing[briefIndex].String;
	}
	
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
	
	Game.context.textAlign = "left";
};

getBriefing = function() {
	
	var briefTag = null;
	var array = [];
	
	if (Game.day == 1) // should always return true for SlugJam
	{
		briefTag = "DAY_001_BRIEF";
	}
	else
	{
		console.log("WHAT YEAR IS IT?");
	}
	
	for (var i = 0; i < Game.strings.length; ++i)
	{
		if (Game.strings[i].Identifier.indexOf(briefTag) > -1)
		{
			array.push(Game.strings[i]);
			console.log("pusheen "+array[i].Identifier);
		}
	}
	
	return array;
	
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
