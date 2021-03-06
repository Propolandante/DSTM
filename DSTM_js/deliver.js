// This file handles all of the functions concerning the DELIVER state

var boxHeight = null;
var boxWidth = null;
var testReporter = null;

deliverInitialize = function() {
	
	//this is only called the first frame after the state change.
	boxHeight = 250;
	boxWidth = CANVAS_WIDTH;
	createChoices("DAY_001_TALK", "TOPIC_A");
	testReporter = new Reporter(130,270);
	testReporter.bubbleChange = true;
	
};

deliverDraw = function() {
	
	//this is called every frame during the DELIVER state
	drawChoiceBox();
	drawDeliverScene();
	drawInfo();
	
};

drawChoiceBox = function() {
	
	Game.context.fillStyle = "#292929";
	Game.context.fillRect(0, CANVAS_HEIGHT - boxHeight, boxWidth, boxHeight);
	
};

drawDeliverScene = function() {
	
	Game.context.drawImage(images[imgNames.indexOf("DeliverBG")], 0, 0);
	testReporter.draw();
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

updateDeliver = function(){
	testReporter.update();
};

/*
 * drawChoices example:
 * 
 */

createChoices = function(tag, prev) {
	var choices = [];
	var match = tag;
	var follows = "";
	if (prev)
	{
		// just grabs the letter at the end of the Identifier
		follows = prev;
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
				choices.push(Game.strings[i]);
			}
			else if (follows === "" && Game.strings[i].Follows === "")
			{
				choices.push(Game.strings[i]);
			}
		}
		
	}
	
	// Next, count the number of choices to determine where they will be drawn on screen
	var choiceCenter =  CANVAS_HEIGHT - (boxHeight / (choices.length + 1) * choices.length);
	var choiceEdge = boxHeight / (choices.length + 1) * .4;
	
	// Next, draw each of the choices and their corresponding buttons
	Game.context.font = "16px arial";
	Game.context.fillStyle = "#E6E6E6";
	var textWidth = boxWidth - 100;
	
	for (var i = 0; i < choices.length; ++i)
	{
		//var numLines = wrapText(choices[i].String, 50, drawHeight, textWidth, 18);
		//var choiceButton = new Button(30, drawHeight - 10, textWidth + 20, 10 + (18*numLines) + 10, choices[i].Identifier);
		var choiceButton = new Button(30, 
			choiceCenter - choiceEdge, 
			textWidth + 20, choiceEdge*2, 
			choices[i]);
		
		choiceButton.onClick = function()
		{
			console.log("Clicked " + this.id);
			clearChoices();
			createChoices(this.tag, this.id);
		};
		choiceButton.draw = function()
		{
			Game.context.fillStyle = "#D5CBC1";
			Game.context.fillRect(this.x, this.y, this.width, this.height);
			
			Game.context.font = "16px arial";
			if(this.hover)
			{
				Game.context.fillStyle = "#251eec";
			}
			else
			{
				Game.context.fillStyle = "#000000";
			}
			
			wrapText(this.str, this.x + 20, this.y + 20, this.width - 20, 18);
		};
		
		console.log("new Button", choiceButton);
		buttons.push(choiceButton);
		
		// set the drawHeight for the next iteration
		choiceCenter += boxHeight / (choices.length + 1);
	}
	
};

clearChoices = function()
{
	for (var i = 0; i < buttons.length; ++i)
	{
		if (buttons[i].type === "choice")
		{
			buttons.splice(i, 1);
		}
	}
};
