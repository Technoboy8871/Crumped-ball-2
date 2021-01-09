const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(700,240,70,70);

	bin1=new Bin(100,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  bin1.diaply();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObject.body.position(x:85,y:-85))
	}
}



