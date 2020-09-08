
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,bobDiameter;
var rope;
var roof;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1=new bob(339,500,40,30);
	bobObject2=new bob(300,500,40,30);
	bobObject3=new bob(378,500,40,30);
	bobObject4=new bob(417,500,40,30);
	bobObject5=new bob(455,500,40,30);

   roof=new Roof(378,250,198,20);
   rope=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);

	//rope= new Rope(bird.body,log6.body);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  bobObject1.display();  
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  rope.display();

  drawSprites();
 
}



