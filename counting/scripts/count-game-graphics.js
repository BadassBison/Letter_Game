(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D6064").s().p("AgtA9IAAh2IAqAAIAAAUQAEgNAHgEQAHgFAJgBQAKAAAMAHIgOAhQgIgEgFAAQgJAAgEAHQgGALAAAaIAAApg");
	this.shape.setTransform(136.1,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D6064").s().p("AgkA3QgOgGgJgPQgIgPgBgTQAAgaASgRQATgSAfAAQAXAAAPAIQAPAIAIAOQAIAPAAAWIAAAFIhaAAQABALAFAFQAGAIAJAAQAHAAAGgDQAEgCAEgGIAtAEQgKASgPAIQgPAIgaAAQgXAAgNgHgAAWgJQgBgNgGgGQgGgGgJAAQgJAAgHAJQgDAFgCALIArAAIAAAAg");
	this.shape_1.setTransform(122.4,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D6064").s().p("AgTA7Igyh1IAwAAIAVBKIAYhKIAuAAIgzB1g");
	this.shape_2.setTransform(107.8,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D6064").s().p("AgrBMQgSgJgLgTQgMgUAAgcQAAgnAXgWQAWgXAnAAQAoAAAXAWQAWAWAAAoQAAAbgKATQgKASgSAKQgSALgcAAQgaAAgSgJgAgYgiQgJALAAAXQAAAZAJALQAKAKAOAAQAQAAAJgKQAJgLAAgZQAAgYgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_3.setTransform(91.1,33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D6064").s().p("AgLBPQgIgEgEgKQgEgIAAgVIAAgoIgQAAIAAghIAQAAIAAgWIAsgXIAAAtIAZAAIAAAhIgZAAIAAApQAAAHACADQACAEAGAAQAFAAAJgDIADAgQgRADgPAAQgPAAgIgEg");
	this.shape_4.setTransform(68.8,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D6064").s().p("AgtA9IAAh2IAqAAIAAAUQAEgNAHgEQAHgFAJgBQAKAAAMAHIgOAhQgIgEgFAAQgJAAgEAHQgGALAAAaIAAApg");
	this.shape_5.setTransform(59.6,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D6064").s().p("Ag4A0QgLgKAAgOQAAgOAIgJQAIgGAVgFIAggHIAQgFQAAgJgEgDQgDgEgJAAQgJAAgGAEQgEADgDAIIgrgFQACgLAFgHQAEgHAJgEQAGgEALgCQALgCANAAQATAAAMADQANACAIAHQAGAFADAKQAEAJAAAIIAAAzIABANIAEAMIgrAAIgDgHIgCgHQgJAIgIAEQgLAFgQAAQgVAAgLgKgAAAAJQgOADgDAEQgEAEAAAEQAAAGAEADQADAEAIAAQAGAAAGgEQAGgEADgFQADgGAAgIIAAgHg");
	this.shape_6.setTransform(45.9,35.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D6064").s().p("AgLBPQgIgEgEgKQgEgIAAgVIAAgoIgQAAIAAghIAQAAIAAgWIAsgXIAAAtIAZAAIAAAhIgZAAIAAApQAAAHACADQACAEAGAAQAFAAAJgDIADAgQgRADgPAAQgPAAgIgEg");
	this.shape_7.setTransform(33.1,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D6064").s().p("Ag3BEQgQgQgCgZIAwgDQACAMAFAGQAHAKANAAQALAAAGgFQAGgFAAgHQAAgGgGgFQgGgFgSgFQghgHgPgLQgOgMAAgUQAAgMAHgLQAIgMAOgGQAPgHAYAAQAfAAARAMQARAMADAZIgwADQgCgLgGgFQgGgFgJAAQgJAAgFAEQgEADAAAGQAAAEAEADQADADANADQAgAHAPAIQAOAHAHAJQAGALAAANQAAAQgJANQgIAOgQAHQgQAHgYAAQgoAAgQgRg");
	this.shape_8.setTransform(19.7,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Overlay
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(114,123,125,0.31)"],[0,0.137,0.435,0.651],1.7,-30.7,1.8,32.2).s().p("AraE6QgTAAAAgSIAApPQAAgSATAAIW1AAQASAAABASIAAJPQgBASgSAAg");
	this.shape_9.setTransform(75,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E5F6FA").ss(3,0,1).p("Arak5IW1AAQATAAAAASIAAJPQAAASgTAAI21AAQgTAAAAgSIAApPQAAgSATAAg");
	this.shape_10.setTransform(75,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BDC5CD").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_11.setTransform(75,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CED7E0").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_12.setTransform(75,31.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C8287").s().p("AraE6QgSAAAAgSIAApPQAAgSASAAIW1AAQASAAAAASIAAJPQAAASgSAAg");
	this.shape_13.setTransform(75,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,153,66);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.numberText = new cjs.Text("98", "bold 40px 'Arial Black'", "#3C57FF");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 51;
	this.numberText.lineWidth = 80;
	this.numberText.parent = this;
	this.numberText.setTransform(41.1,16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(200,200,200,0.8)").s("#dddddd").ss(8.4,1,1).rr(-40.95,-40.95,81.9,81.9,12);
	this.shape.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.numberText}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,52,51);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.restartButton = new lib.RestartButton();
	this.restartButton.setTransform(196.5,283.1,1,1,0,0,0,121.5,51);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EFF8").s().p("AgcBrIAAg1IA6AAIAAA1gAgTAnIgLhgIAAgxIA+AAIAAAxIgNBgg");
	this.shape.setTransform(217.1,103.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6EFF8").s().p("AAWBPIAAhUQAAgOgGgGQgFgGgKgBQgJABgGAIQgHAIAAATIAABLIg8AAIAAiaIA4AAIAAAaQAMgQANgGQALgHASAAQAZAAAOAOQAOAQAAAeIAABhg");
	this.shape_1.setTransform(202.1,105.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6EFF8").s().p("Ag7A+QgdgYAAgmQAAgiAYgXQAYgXAoAAQAuAAAXAbQAUAWAAAfQAAAjgYAXQgYAXgpAAQgkAAgXgTgAgUgdQgIAKAAATQAAAVAIAKQAJAJALAAQANAAAIgJQAIgKAAgVQAAgTgIgKQgJgKgMAAQgLAAgJAKg");
	this.shape_2.setTransform(182.1,106.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6EFF8").s().p("AAlBrIgliFIgkCFIhBAAIgwjVIA/AAIAXB2IAhh2IA9AAIAhB2IAXh2IA/AAIgwDVg");
	this.shape_3.setTransform(157.1,103.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6EFF8").s().p("AhDBBQgOgQAAgeIAAhhIA8AAIAABTQAAAPAGAHQAFAFAKAAQAIAAAHgIQAHgIAAgTIAAhLIA8AAIAACZIg4AAIAAgZQgMAQgNAHQgLAGgSAAQgZAAgOgOg");
	this.shape_4.setTransform(122.1,106.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6EFF8").s().p("Ag7A+QgdgYAAgmQAAgiAYgXQAYgXAoAAQAuAAAXAbQAUAWAAAfQAAAjgYAXQgXAXgqAAQgkAAgXgTgAgUgdQgIAKAAATQAAAVAIAKQAJAJALAAQANAAAIgJQAIgKAAgVQAAgTgIgKQgJgKgMAAQgLAAgJAKg");
	this.shape_5.setTransform(102.1,106.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6EFF8").s().p("AggBrIAAhaIhTh7IBJAAIAqBJIArhJIBJAAIhTB7IAABag");
	this.shape_6.setTransform(80.5,103.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#343638").s().p("A3bfPMAAAg+eMAu2AAAMAAAA+eg");
	this.shape_7.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.restartButton}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);


// stage content:
(lib.Countgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Box
	this.instance = new lib.NumberedBox();
	this.instance.setTransform(229,174.9,1,1,0,0,0,25,25);

	this.instance_1 = new lib.NumberedBox();
	this.instance_1.setTransform(177,163.9,1,1,0,0,0,25,25);

	this.instance_2 = new lib.NumberedBox();
	this.instance_2.setTransform(130.2,146.8,1,1,0,0,0,25,25);

	this.instance_3 = new lib.NumberedBox();
	this.instance_3.setTransform(164.2,129.2,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Background
	this.instance_4 = new lib.Background();
	this.instance_4.setTransform(145,195,1,1,0,0,0,145,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,200,300,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;