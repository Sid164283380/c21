
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,engine,world
function preload() {

}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	//Create the Bodies Here.

	ball = Bodies.circle(20, 20, 8, ball_options)
	World.add(world, ball)

	Engine.run(engine);
	// create bucket
	groundObj = new ground(width / 2, 670, width, 20)
	leftside = new ground(1100, 600, 20, 120)
	rightside = new ground(100, 600, 20, 120)





}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-2});
	}

}
function draw() {
	rectMode(CENTER);
	background(0);
	groundObj.display();
	leftside.display();
	rightside.display();
	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,8,8)

}



