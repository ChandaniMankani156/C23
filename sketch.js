const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 =new box(200,100,50,50) 
 ground1 = new ground(200,380,400,20) 

 //creating box 2
 box2 = new box(200,100,50,100)
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display()
   ground1.display()
   box2.display();
}