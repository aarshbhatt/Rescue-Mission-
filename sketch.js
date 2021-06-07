const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var plane;
var stone1, stone2;
var iron1, iron2;
var bg; 

function preload(){

 bg = loadImage("bg.png");

}




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(200,500,10);
    rubber2 = new Rubber(210,500,10);
    rubber3 = new Rubber(220,500,10);
    rubber4 = new Rubber(230,500,10);
    rubber5 = new Rubber(240,500,10);
    stone1 = new Stone(600,500,50,50);
    stone2 = new Stone(250,550,175,30);
    iron1 = new Iron(800,500,60,60);
    iron2 = new Iron(100,500,80,80);

}

function draw(){
    background(bg);
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone1.display();
    stone2.display();
    iron1.display();
    iron2.display();    
    
 
}