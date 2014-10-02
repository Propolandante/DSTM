function Topic() {
	
	// private variables
	var description = "Placeholder description";
}

wrapText = function(text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';
	var lineCounter = 0;
	
	for(var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + ' ';
  		var metrics = Game.context.measureText(testLine);
  		var testWidth = metrics.width;
  		
  		if (testWidth > maxWidth && n > 0) {
  			Game.context.fillText(line, x, y);
  			line = words[n] + ' ';
  			y += lineHeight;
  			lineCounter++;
  		}
  		else {
  			line = testLine;
  			
  		}
  	}
    Game.context.fillText(line, x, y);
    lineCounter++;
    
    return lineCounter;
};
