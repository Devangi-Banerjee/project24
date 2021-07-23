
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var side1 , side2 , side3;
var Paper;
var groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 side1=createSprite(360, 660 , 200,20);
	side1.shapeColor=color("red");

	side2=createSprite(450 , 600 ,20,100);
    side2.shapeColor=color("red");

	side3=createSprite(267 , 600 , 20,100);
	side3.shapeColor=color("red");
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Paper = new paper(600,600,9);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 Paper.display();

  drawSprites();
 
}



