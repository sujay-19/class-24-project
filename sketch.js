const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var computerar,playerac
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerar = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  playerac = new PlayerArcher(340,playerBase.body.position.y - 180,120,120
    )
  //Create an arrow Object
  arrow = new PlayerArrow(playerac.body.position.x,playerac.body.position.y,80,10)
  World.add(world,arrow)
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("blue");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerac.display();
  computerar.display()
 arrow.display()

  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode===32){
    //Call shoot() function and pass angle of playerArcher
     arrow.shoot(playerac.body.angle)

  }
}



