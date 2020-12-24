
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld,ball1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myengine = Engine.create();
	myworld = engine.world;

	//Create the Bodies Here.
 ball1 = new Ball(56,46,55,55);
 dustbin1 = new Dustbin(600,500);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display();
dustbin1.display();
  drawSprites();
 
}



