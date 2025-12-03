(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Astro_Launch_atlas_1", frames: [[892,1505,1131,208],[686,1715,1131,137],[0,1619,684,284],[1002,556,465,280],[1560,0,289,262],[1469,556,316,337],[1797,264,189,196],[1851,0,157,164],[1787,531,232,251],[1787,784,163,160],[1560,264,235,265],[0,1002,890,615],[1002,0,556,554],[0,0,1000,1000],[892,1002,954,501]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.asteroid1 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.asteroid2 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.asteroid3 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.asteroid4 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.asteroid5 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.asteroid6 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.asteroid7 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.asteroid8 = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.board = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.playbtn = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.space = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ufo = function() {
	this.initialize(ss["Astro_Launch_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ufo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ufo();
	this.instance.setTransform(-59,-31,0.1247,0.1247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ufo_1, new cjs.Rectangle(-59,-31,119,62.5), null);


(lib.playButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playbtn();
	this.instance.setTransform(-86.7,-86.4,0.3119,0.3119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playButton, new cjs.Rectangle(-86.7,-86.4,173.4,172.8), null);


(lib.liveScoreLabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.livescorelabel = new cjs.Text("Score:", "36px 'Times New Roman'", "#FFFFFF");
	this.livescorelabel.name = "livescorelabel";
	this.livescorelabel.lineHeight = 42;
	this.livescorelabel.lineWidth = 95;
	this.livescorelabel.parent = this;
	this.livescorelabel.setTransform(-47.3,-19.95);

	this.timeline.addTween(cjs.Tween.get(this.livescorelabel).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.liveScoreLabel, new cjs.Rectangle(-49.3,-21.9,98.69999999999999,43.9), null);


(lib.liveScore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.livescore = new cjs.Text("0", "36px 'Times New Roman'", "#FFFFFF");
	this.livescore.name = "livescore";
	this.livescore.lineHeight = 42;
	this.livescore.lineWidth = 1114;
	this.livescore.parent = this;
	this.livescore.setTransform(-557.15,-19.95);

	this.timeline.addTween(cjs.Tween.get(this.livescore).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.liveScore, new cjs.Rectangle(-559.1,-21.9,1118.3000000000002,43.9), null);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.space();
	this.instance.setTransform(-639.95,-320,1.28,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-639.9,-320,1279.9,640), null);


(lib.as_h = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid4();
	this.instance.setTransform(-28,-29,0.2991,0.2991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_h, new cjs.Rectangle(-28,-29,56.5,58.6), null);


(lib.as_g = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid8();
	this.instance.setTransform(-35,-40,0.2988,0.2988);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_g, new cjs.Rectangle(-35,-40,70.2,79.2), null);


(lib.as_f = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid5();
	this.instance.setTransform(-31,-32,0.3935,0.3935);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_f, new cjs.Rectangle(-31,-32,61.8,64.6), null);


(lib.as_e = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid7();
	this.instance.setTransform(-31,-30,0.3811,0.3811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_e, new cjs.Rectangle(-31,-30,62.1,61), null);


(lib.as_d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid6();
	this.instance.setTransform(-37,-40,0.3168,0.3168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_d, new cjs.Rectangle(-37,-40,73.5,79.5), null);


(lib.as_c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid2();
	this.instance.setTransform(-39,-35,0.2702,0.2702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_c, new cjs.Rectangle(-39,-35,78.1,70.8), null);


(lib.as_b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid3();
	this.instance.setTransform(-33,-36,0.2109,0.2109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_b, new cjs.Rectangle(-33,-36,66.7,71.1), null);


(lib.as_a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid1();
	this.instance.setTransform(-47,-28,0.2008,0.2008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.as_a, new cjs.Rectangle(-47,-28,93.4,56.3), null);


(lib.homeScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-282.55,-78.4,0.5,0.5);

	this.playButton = new lib.playButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(0,99.6,0.5765,0.5765,0,0,0,0,0.1);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-282.55,-147.1,0.5,0.5);

	this.instance_2 = new lib.board();
	this.instance_2.setTransform(-347,-240,0.7793,0.7793);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.playButton},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.homeScreen, new cjs.Rectangle(-347,-240,693.6,479.3), null);


(lib.gameOverScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.playButton = new lib.playButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(-125.35,105.3,0.5748,0.5748,0,0,0,-0.1,0.1);

	this.score = new cjs.Text("0", "72px 'Times New Roman'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 82;
	this.score.lineWidth = 494;
	this.score.parent = this;
	this.score.setTransform(-125.3,-12.7,0.5748,0.5748);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-296.2,-155.9,0.5,0.5);

	this.instance_1 = new lib.board();
	this.instance_1.setTransform(-475,-241,0.7836,0.7836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.score},{t:this.playButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameOverScreen, new cjs.Rectangle(-475,-241,697.4,481.9), null);


// stage content:
(lib.AstroLaunch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// ADOBE ANIMATE HTML5 GAME
		// by Khian Victory D. Calderon and Rafael Metran
		
		// ===================== DEFINING LINKAGES =====================
		
		let homeScreen = new lib.homeScreen;
		let gameOverScreen = new lib.gameOverScreen;
		let ship = new lib.ufo;
		
		let liveScore = new lib.liveScore;
		let liveScoreLabel = new lib.liveScoreLabel;
		
		let asteroids = [];
		
		// ===================== UTILITY FUNCTIONS =====================
		function placeHomeScreen() {
		    homeScreen.x = stage.canvas.width / 2.6125;
		    homeScreen.y = stage.canvas.height / 2.6125;
		    stage.addChild(homeScreen);
		}
		
		function generateAsteroid(type, speed) {
		    let asteroid = new lib[type]();
		    asteroid.x = stage.canvas.width + 50;
		    asteroid.y = Math.random() * (stage.canvas.height - 50);
		    asteroid.speed = speed + Math.random() * 3;
		    asteroid.rotationSpeed = Math.random() * 5 - 2.5;
		    stage.addChild(asteroid);
		    asteroids.push(asteroid);
		}
		
		function deleteAsteroid(asteroid) {
		    if (!asteroid) return;
		    stage.removeChild(asteroid);
		    const index = asteroids.indexOf(asteroid);
		    if (index > -1) asteroids.splice(index, 1);
		}
		
		function getCircle(obj) {
		    const bounds = obj.getTransformedBounds();
		    if (!bounds) return null;
		    const centerX = bounds.x + bounds.width / 2;
		    const centerY = bounds.y + bounds.height / 2;
		    const radius = Math.min(bounds.width, bounds.height) / 2 * 0.9; // tighter collision
		    return { x: centerX, y: centerY, r: radius };
		}
		
		function homePage() {
		    placeHomeScreen();
		    stage.removeChild(ship);
		    homeScreen.playButton.addEventListener("click", gamePage);
		}
		
		function overPage() {
		    stage.addChild(gameOverScreen);
		    gameOverScreen.x = stage.canvas.width / 2.125;
		    gameOverScreen.y = stage.canvas.height / 2.6125;
		    gameOverScreen.playButton.addEventListener("click", gamePage);
		}
		
		let score = 0;
		let scoreInterval;
		let gameTickHandler;
		let spawnTimeout;
		
		function gamePage() {
		    // Remove previous screens
		    stage.removeChild(homeScreen);
		    stage.removeChild(gameOverScreen);
		    homeScreen.playButton.removeEventListener("click", gamePage);
		    gameOverScreen.playButton.removeEventListener("click", gamePage);
		    stage.removeChild(ship);
		
		    // Live score setup
		    liveScore.x = 720;
		    liveScore.y = 50;
		    liveScoreLabel.x = 110;
		    liveScoreLabel.y = 50;
		    stage.addChild(liveScoreLabel);
		    stage.addChild(liveScore);
		    liveScore.text = "0";
		
		    asteroids = [];
		    let asteroidSpeed = 3;
		    let moveUp = false, moveDown = false, moveLeft = false, moveRight = false;
		
		    // UFO setup
		    ship.x = stage.canvas.width / 6;
		    ship.y = stage.canvas.height / 2;
		    ship.scale = 0.08;
		    stage.addChild(ship);
		
		    score = 0;
		    if (scoreInterval) clearInterval(scoreInterval);
		    scoreInterval = setInterval(() => {
		        score += 1;
		        liveScore.livescore.text = score;
		    }, 100);
		
		    // ================== KEYBOARD CONTROLS ==================
		    function keyDownHandler(e) {
		        switch (e.code) {
		            case "ArrowUp": case "KeyW": moveUp = true; break;
		            case "ArrowDown": case "KeyS": moveDown = true; break;
		            case "ArrowLeft": case "KeyA": moveLeft = true; break;
		            case "ArrowRight": case "KeyD": moveRight = true; break;
		        }
		    }
		
		    function keyUpHandler(e) {
		        switch (e.code) {
		            case "ArrowUp": case "KeyW": moveUp = false; break;
		            case "ArrowDown": case "KeyS": moveDown = false; break;
		            case "ArrowLeft": case "KeyA": moveLeft = false; break;
		            case "ArrowRight": case "KeyD": moveRight = false; break;
		        }
		    }
		
		    window.addEventListener("keydown", keyDownHandler);
		    window.addEventListener("keyup", keyUpHandler);
		
		    // ================== ASTEROID SPAWNING ==================
		    let startTime = Date.now();
		    let maxAsteroidsPerSecond = 20;
		
		    function spawnAsteroids() {
		        const types = ["as_a","as_b","as_c","as_d","as_e","as_f","as_g","as_h"];
		        const elapsed = (Date.now() - startTime) / 1000;
		        let asteroidsPerSecond = Math.min(maxAsteroidsPerSecond, 2 * Math.pow(1.05, elapsed));
		        const interval = 3000 / asteroidsPerSecond;
		
		        const type = types[Math.floor(Math.random() * types.length)];
		        generateAsteroid(type, asteroidSpeed);
		        asteroidSpeed += 0.05;
		
		        spawnTimeout = setTimeout(spawnAsteroids, interval);
		    }
		
		    clearTimeout(spawnTimeout);
		    spawnAsteroids();
		
		    // ================== GAME LOOP ==================
		    createjs.Ticker.framerate = 60;
		    if (gameTickHandler) createjs.Ticker.removeEventListener("tick", gameTickHandler);
		
		    gameTickHandler = () => {
		        if (!ship) return;
		
		        // UFO movement
		        const ufoBounds = ship.getBounds();
		        const ufoWidth = ufoBounds ? ufoBounds.width * ship.scale : 100 * ship.scale;
		        const ufoHeight = ufoBounds ? ufoBounds.height * ship.scale : 100 * ship.scale;
		
		        if (moveUp && ship.y - ufoHeight / 2 > 0) ship.y -= 6;
		        if (moveDown && ship.y + ufoHeight / 2 < stage.canvas.height - stage.canvas.height / 4) ship.y += 6;
		        if (moveLeft && ship.x - ufoWidth / 2 > 0) ship.x -= 6;
		        if (moveRight && ship.x + ufoWidth / 2 < stage.canvas.width - stage.canvas.width / 4) ship.x += 6;
		
		        // Asteroid movement and collision
		        asteroids.forEach((asteroid) => {
		            asteroid.x -= asteroid.speed;
		            asteroid.rotation += asteroid.rotationSpeed;
		
		            if (asteroid.x + asteroid.getBounds().width < 0) {
		                deleteAsteroid(asteroid);
		            }
		
		            // Circle-based collision
		            const ufoCircle = getCircle(ship);
		            const asteroidCircle = getCircle(asteroid);
		
		            if (ufoCircle && asteroidCircle) {
		                const dx = ufoCircle.x - asteroidCircle.x;
		                const dy = ufoCircle.y - asteroidCircle.y;
		                const distance = Math.sqrt(dx*dx + dy*dy);
		
		                if (distance < ufoCircle.r + asteroidCircle.r) {
		                    // Collision happened
		                    asteroids.forEach(a => stage.removeChild(a));
		                    asteroids = [];
		                    stage.removeChild(ship);
		
		                    clearTimeout(spawnTimeout);
		                    createjs.Ticker.removeEventListener("tick", gameTickHandler);
		                    clearInterval(scoreInterval);
		
		                    gameOverScreen.score.text = score;
		                    stage.removeChild(liveScore);
		                    stage.removeChild(liveScoreLabel);
		
		                    overPage();
		                }
		            }
		        });
		
		        stage.update();
		    };
		
		    createjs.Ticker.addEventListener("tick", gameTickHandler);
		}
		
		// ===================== INITIAL PAGE =====================
		homePage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.instance = new lib.BG();
	this.instance.setTransform(639.95,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,320,640,320);
// library properties:
lib.properties = {
	id: '369FD459FADF5E4E92A4E601FE5E4F9F',
	width: 1280,
	height: 640,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Astro_Launch_atlas_1.png?1764726283829", id:"Astro_Launch_atlas_1"}
	],
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
an.compositions['369FD459FADF5E4E92A4E601FE5E4F9F'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;