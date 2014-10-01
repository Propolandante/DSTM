var Game = {};

// Game variables
Game.fps = 50;
Game.state = ""; // valid states: "START", "LISTEN", "PLAN", "DELIVER"
Game.prevState = "";

Game.initialize = function() {
  //this.changeState("DELIVER"); // this should initialize to START, for the start menu
  this.context = canvas.getContext('2d');
};

Game.draw = function() {
  this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  deliverInitialize();
  
};

Game.update = function() {
  
};
