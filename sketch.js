
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter=60;

	engine = Engine.create();
	world = engine.world;

	bob3 = new BOB(400,450,30);
	bob4 = new BOB(461,450,30);
	bob2 = new BOB(339,450,30);
	bob1 = new BOB(278,450,30);
	bob5 = new BOB(522,450,30);

	roof = new ROOF(400,100,350,25);

	rope1 = new ROPE(bob1.body, roof.body,-bobDiameter/2,0);
	rope2 = new ROPE(bob2.body, roof.body,-bobDiameter/2,0);
	rope3 = new ROPE(bob3.body, roof.body,-bobDiameter/2,0);
	rope4 = new ROPE(bob4.body, roof.body,-bobDiameter/2,0);
	rope5 = new ROPE(bob5.body, roof.body,-bobDiameter/2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(243,243,243);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



