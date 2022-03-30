noseX=0;
noseY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	marioJump=loadSound("jump.wav");
	marioCoin=loadSound("coin.wav");
	gameOver=loadSound("gameover.wav");
	marioDie=loadSound("mariodie.wav");
	marioKick=loadSound("kick.wav");
}
function setup() {
	canvas = createCanvas(1240, 336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	poseNet=ml5.poseNet(video, modelloaded);
	poseNet.on('pose', gotPoses);
}
function draw() {
	game();
}
function modelloaded(){
	console.log("Your Model Is Successfully Loaded!");
}
function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("Nose X = "+noseX);
		console.log("Nose Y = "+noseY);
	}
}