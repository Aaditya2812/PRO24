
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=new Ball(200,200,20,20)
	ground=new Ground(500,390,1000,15);

	box1= new Box(750,375,200,15)
	box2=new Box(650,343,15,80)
	box3=new Box(850,343,15,80)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
ground.display();  
ball.display();
box1.display();
box2.display();
box3.display();
//keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
  
	}
}



