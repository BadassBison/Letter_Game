(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Restart", "30px 'Krungthep'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 151;
	this.text.parent = this;
	this.text.setTransform(93.5,10.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF"],[0,1],0,70,0,-45).s().rr(-94,-31,188,62,12);
	this.shape.setTransform(94,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,62);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.numberText = new cjs.Text("98", "30px 'Krungthep'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 40;
	this.numberText.lineWidth = 60;
	this.numberText.parent = this;
	this.numberText.setTransform(32.1,14);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFA8E7","#8FB2FD","rgba(178,255,255,0.2)"],[0,0.871,1],0,0,0,0,0,46).s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0021E3").s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape_1.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberedBox, new cjs.Rectangle(0,0,65,65), null);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RestartButton();
	this.instance.parent = this;
	this.instance.setTransform(77.1,236.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.text = new cjs.Text("You Won!", "30px 'Krungthep'", "#FFA6FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 249;
	this.text.parent = this;
	this.text.setTransform(168.5,89.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgbBAidMAAAhE5MA2DAAAMAAABE5g");
	this.shape.setTransform(173,220.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOverView, new cjs.Rectangle(0,0,346,441), null);


// stage content:
(lib.CountGameGraphics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GameOverView();
	this.instance.parent = this;
	this.instance.setTransform(-186.9,230.1,1,1,0,0,0,173,220.5);

	this.instance_1 = new lib.NumberedBox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432,62.1,1,1,0,0,0,32.5,32.5);

	this.instance_2 = new lib.NumberedBox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(466.1,194.1,1,1,0,0,0,32.5,32.5);

	this.instance_3 = new lib.NumberedBox();
	this.instance_3.parent = this;
	this.instance_3.setTransform(478.1,324.1,1,1,0,0,0,32.5,32.5);

	this.instance_4 = new lib.NumberedBox();
	this.instance_4.parent = this;
	this.instance_4.setTransform(438.5,-13.8,1,1,0,0,0,32.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.9,153.7,870.5,496.8);
// library properties:
lib.properties = {
	id: '82FD9312960542B7B4EA9128EA6E6A6B',
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['82FD9312960542B7B4EA9128EA6E6A6B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;