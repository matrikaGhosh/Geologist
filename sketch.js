
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Ground = new Ground(600, height, 1200, 20)
	Hammer = new Hammer(700,320,70,70)
	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);6
	Engine.update(engine)
	ground.display();
	hammer.display();
	rubber.display();
	drawSprites();

}



