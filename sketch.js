const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particals = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 20);

  World.add(world, ground);



  for (var i = 0; i<=width; i = i + 80){
divisions.push(new Division(i, height - divisionHeight/2,   10, divisionHeight));

  }
  for (var j = 40; j<=width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j<=width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j<=width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j<=width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
  

}

function draw() {
  background(255,5,255);  
  drawSprites();
  ground.display(); 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
  divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
    }

    for (var i = 0; i<particals.length; i++){
      particals[i].display();
      }

    if (frameCount%90===0){

      particals.push(new Partical(random(width/2 - 10, width/2 + 10),10, 10));
     console.log(particals[0].body.position.y);
    }

 
   
       

    
}