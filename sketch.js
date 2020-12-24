var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");

	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//creating the package
	packageSprite=createSprite(5, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityX = 4;

	//creating the helicopter
	helicopterSprite=createSprite(5, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX = 4;

	//creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(5 , 200 , 5 , {restitution: 0.8 , isStatic:true});
	World.add(world, packageBody);
	packageBody.velocityX = 4;
	
	//Creating the Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	//creating the box
	box1=new Box(385,650,200,20);
	box2=new Box(275,620,20,100);
	box3=new Box(480,620,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);

  //packageSprite.x = helicopterSprite.x ;
  //packageSprite.y = helicopterSprite.y ;

  //packageSprite.x= packageBody.position.x  ;
  packageSprite.y= packageBody.position.y  ;

  //bringing the helicopter back again and again
  if (helicopterSprite.x >= 900){
	  helicopterSprite.x=5;
  }

  //displaying the boxes
  box1.display();
  box2.display();
  box3.display();

  if(packageSprite.isTouching(groundSprite)){

	packageSprite.velocityX=0;

	Body.setStatic(packageBody,true);
  }

  //To draw the sprites
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}
