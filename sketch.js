var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle1
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 160; j <=160; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 240; j <=240; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 320; j <=320; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 400; j <=400; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 480; j <=480; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 560; j <=560; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 640; j <=640; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 720; j <=720; j = j + 80) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }

  




  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  

  
  //create 4th row of plinko objects
  for (var j = 0; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects

  
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var o = 0; o < divisions.length; o++) {
    divisions[o].display();
  }

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }
  
  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }

  for (var p = 0; p < divisions.length; p++) {
    divisions[p].display();
  }
  
  

  //display the paricles 
if(frameCount%60===0){
  particles.push(new particle(random(width/2-30,width/2+30),10,10))

}
for(var j = 0;j<particles.length;j++){
  particles[j].display()
}

}

