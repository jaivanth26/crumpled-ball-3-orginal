var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(150, 50, 10);   

 //dustbin  
   dustbinRight = new Dustbin(1113, 540, 10, 150);
   dustbinMiddle = new Dustbin(1015, 600, 200, 10);
   dustbinLeft = new Dustbin(913, 540, 10, 150);

 //ground
   ground = new Ground(600,618,1600, 15); 

   sling1= new SlingShot(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('yellow');

//displaying
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
