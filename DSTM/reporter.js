function Reporter(x, y) {
	
	this.x = x;
	this.y = y;
	this.width = 300;
	this.height = 400;
	this.bubbleChange = false;
	this.bubble = false;
	this.bubbleOpen = false;
	this.button = null;
}

Reporter.prototype.update = function(){
	if(this.bubbleChange === true){
		if(this.bubble){
			if(this.bubbleOpen){
				this.bubble = false;
				this.bubbleOpen = false;
				this.destroyBubble();
			}else{
				this.bubbleOpen = true;
				this.destroyBubble();
				this.spawnBubble(this.width,100);
				console.log("large");
			}
		}else{
			this.bubble = true;
			this.spawnBubble(this.width,25);
			console.log("small");
		}
		this.bubbleChange = false;
	}
};

Reporter.prototype.draw = function(){
	Game.context.drawImage(images[imgNames.indexOf("Reporter1")], this.x, this.y);
	
	if (this.bubble === true){
		if (this.bubbleOpen === false){
			Game.context.beginPath();
			var drawx = this.x + this.width/2;
			var drawy = this.y + 60;
			Game.context.moveTo(drawx, drawy);
			Game.context.lineTo(drawx-=10, drawy+=20);
			Game.context.lineTo(drawx = this.x+5, drawy);
			Game.context.lineTo(drawx-=5, drawy+=5);
			Game.context.lineTo(drawx, drawy+=15);
			Game.context.lineTo(drawx+=5, drawy+=5);
			Game.context.lineTo(drawx = this.x +this.width-5, drawy);
			Game.context.lineTo(drawx+=5, drawy-=5);
			Game.context.lineTo(drawx, drawy-=15);
			Game.context.lineTo(drawx-=5, drawy-=5);
			Game.context.lineTo(drawx = this.x - 5 + this.width/2, drawy);
			Game.context.fillStyle = "#999999";
			Game.context.fill();
		}else{
			Game.context.beginPath();
			var drawx = this.x + this.width/2;
			var drawy = this.y + 60;
			Game.context.moveTo(drawx, drawy);
			Game.context.lineTo(drawx-=10, drawy+=20);
			Game.context.lineTo(drawx = this.x+5, drawy);
			Game.context.lineTo(drawx-=5, drawy+=5);
			Game.context.lineTo(drawx, drawy+=90);
			Game.context.lineTo(drawx+=5, drawy+=5);
			Game.context.lineTo(drawx = this.x +this.width-5, drawy);
			Game.context.lineTo(drawx+=5, drawy-=5);
			Game.context.lineTo(drawx, drawy-=90);
			Game.context.lineTo(drawx-=5, drawy-=5);
			Game.context.lineTo(drawx = this.x - 5 + this.width/2, drawy);
			Game.context.fillStyle = "#aaaaaa";
			Game.context.fill();
		}
	}
	
};

Reporter.prototype.spawnBubble = function(width,height){
	this.button = new Button(this.x,this.y+20,width,height,null);
	this.button.onClick = function(){
		this.bubbleChange = true;
	};
	buttons.push(this.button);
	console.log(buttons.indexOf(this.button));
};

Reporter.prototype.destroyBubble = function(){
	var index = buttons.indexOf(this.button);
	buttons.splice(index, 1);
	console.log("removed");
	
};
