//consts
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var ground;

//arrays
var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  

  //creating bodies
    ground = new Ground(0,800,1600,10);

    for (var k = 0; k <= width; k = k+80) {
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

    for (var j = 40; j <=width; j=j+50) {
       plinko.push(new Plinko(j,95,15));
    }

    for (var j = 15; j <=width-10; j=j+50) {
       plinko.push(new Plinko(j,195,15));
    }

     for (var j = 40; j <=width; j=j+50) {
       plinko.push(new Plinko(j,295,15));
    }

     for (var j = 15; j <=width-10; j=j+50) {
       plinko.push(new Plinko(j,395,15));
    }
}

function draw() {
  background(0);
  Engine.update(engine);
  
  //displaying bodies
    ground.display();

    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }

    for (var i = 0; i < plinko.length; i++) {
      plinko[i].display();
    }

    if(frameCount%90===0){
      particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
    }
  
   for (var j = 0; j < particles.length; j++) {
      particles[j].display();
    }

}