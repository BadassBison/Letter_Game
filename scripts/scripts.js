// Scripts for Counting Game

var boxes = 26;

// CLASS --- The numbered boxes
class NumberedBox extends createjs.Container {
	constructor(game, number=0){
		super();
		var alphabet = "AABCDEFGHIJKLMNOPQRSTUVWXYZ"
		
		this.game = game;
		this.number = number;
		
		
		var movieclip = new lib.NumberedBox();
		movieclip.numberText.text = alphabet.charAt(number);
		
		//new createjs.ButtonHelper(movieclip, 0, 1, 2, false, new lib.NumberedBox(), 3);
		
		this.addChild(movieclip);
		
		this.setBounds(0,0,50,50);
		
		//handling click/tap
		this.on('click', this.handleClick.bind(this));
	}
	handleClick() {
		this.game.handleClick(this);
	}
}






// CLASS --- Handles the game data (ex ordering the clicks by number only)
class GameData {
	constructor(){
		this.amountOfBox = boxes;
		this.resetData();
	}
	resetData(){
		this.currentNumber = 1;
	}
	nextNumber(){
		this.currentNumber += 1;
	}
	isRightNumber(number){
		return (number === this.currentNumber);
	}
	isGameWin(){
		return (this.currentNumber > this.amountOfBox );
	}
}






// CLASS --- The game
class Game{
	constructor(){
		console.log(`Welcome to the game. Version ${this.version()}`);
		
		// grabs the canvas and stage elements
		this.canvas = document.getElementById("gameCanvas");
		this.stage = new createjs.Stage(this.canvas);
		
		this.canvas.width = window.innerWidth - 20;
		this.canvas.height = window.innerHeight - 20;
		
		//colorRect(0, 0, canvas.width, canvas.height, "#0592ff");
		
		this.stage.width = this.canvas.width;
		this.stage.height = this.canvas.height;
		
		// enables the hover effect
		this.stage.enableMouseOver();
		
		// mobile touch
		createjs.Touch.enable(this.stage);
		
		//enable retina screen
		this.retinalize();
		
		// 60 FPS for the stage
		createjs.Ticker.setFPS(60);
		
		// game related initialization
		this.gameData = new GameData();
		
		// keeps redrawing the stage
		createjs.Ticker.on("tick", this.stage);
		
		this.restartGame();
		
		
	}
	
	version(){
		return '1.0.0';
	}
	
	restartGame(){
		this.gameData.resetData();
		this.stage.removeAllChildren();
		// numbers
		this.generateMultipleBoxes(this.gameData.amountOfBox);
	}
	
	// method that creates the boxes in random places
	generateMultipleBoxes (amount=10) {
		for (var i = amount; i>0; i--) {
			var movieclip = new NumberedBox(this, i);
			this.stage.addChild(movieclip);
			
			// random positioning for the numbers
			movieclip.x = Math.random() * (this.stage.width - (movieclip.getBounds().width+40));
			movieclip.y = Math.random() * (this.stage.height - (movieclip.getBounds().height+40));
		}
	}
	
	// allow a click if the number is correct
	handleClick(numberedBox){
		if (this.gameData.isRightNumber(numberedBox.number)) {
			this.stage.removeChild(numberedBox);
			this.gameData.nextNumber();
			
			// is game over?
			if(this.gameData.isGameWin()){
				var resetButton = document.getElementById("restart");
				
				document.getElementById("gameOverView").className = "open";
				
				
			}
		}
	}
	retinalize() {
		this.stage.width = this.canvas.width;
		this.stage.height = this.canvas.height;
		
		let ratio = window.devicePixelRatio;
		if (ratio === undefined) {
			return;
		}
		
		this.canvas.setAttribute('width', Math.round( this.stage.width * ratio ));
		this.canvas.setAttribute('height', Math.round( this.stage.height * ratio ));
		
		this.stage.scaleX = this.stage.scaleY = ratio;
		
		//set CSS style
		this.canvas.style.width = this.stage.width + "px";
		this.canvas.style.height = this.stage.height + "px";
	}
}





// Start the game
var game = new Game();


