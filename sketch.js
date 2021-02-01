const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ground,rocket;
function setup() {
	createCanvas(500,500);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(250,485,550,10);
	rocket = new Rocket(250,430,50,100);
	Engine.run(engine);
}
function draw() {
  Engine.update(engine);
  background("MistyRose");
  rocket.display();
  ground.display();
  moveRocket();
  drawSprites();
}
function moveRocket()
{
}