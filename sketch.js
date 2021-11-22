const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,background2;
var slingshot;
var bow, bowIMG,arrow;
var tiro, tiro2, tiro3;
var gameState = "inicio";
var score, tiros, count;

function preload() {
    fechaHora();
    bowIMG = loadImage("bow.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,435,1200,10);
    /*borde1 = new Ground(600,-20,1205,10);
    borde2 = new Ground(1220,200,10,1200);
    borde3 = new Ground(-20,200,10,1200);*/


    tiro = new Tiro(1000,200,160);
    tiro2 = new Tiro(1000,200,110);
    tiro3 = new Tiro(1000,200,60);

    bow = createSprite(290,200,20,20);
    bow.addImage(bowIMG);
    bow.scale = 0.12;
    
    arrow = new Arrow(300,190); 
    slingshot = new SlingShot(arrow.body,{x:282, y:130});


    score = 0;
    tiros = 5;
    count = 0;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    /*borde1.display();
    borde2.display();
    borde3.display();*/


    fill("blue");
    tiro.display();

    fill("purple");
    tiro2.display();

    fill("pink");
    tiro3.display();

    
    if(Tocando(tiro,arrow)){
        score = score+50;
        Matter.Body.setStatic(arrow.body,true);
    }
    else{
        score = score;
    }

    if(Tocando(tiro2,arrow)){
        score = score+100;
        Matter.Body.setStatic(arrow.body,true);
    }
    else{
        score = score;
    }

    if(Tocando(tiro3,arrow)){
        score = score+100;
        Matter.Body.setStatic(arrow.body,true);
    }
    else{
        score = score;
    }
    


    arrow.display();
    slingshot.display();   

    strokeWeight(0);
    fill("blue");
    textSize(25);
    text("marcador: "+ score,1000,20);


    fill("yellow");
    textSize(25);
    text("tiros: "+ tiros,10,20);


    console.log(mouseY);
    drawSprites();

    fill("black");
    textSize(15);
    text("50",990,140);
    text("100",987,165);
    text("200",987,205);
}


function mouseDragged(){
    if(gameState === "inicio"){
        Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
    } 
}


function mouseReleased(){
    slingshot.fly();
    gameState = "libre";
}

function mousePressed(){
    if(tiros>0 && arrow.body.position.x === 200 && arrow.body.position.y === 70){
        tiros--;
    }
}


function keyPressed(){
    if(keyCode === 32 && tiros > 0 && arrow.body.speed<1 || arrow.body.position.x > 1200){
        slingshot.attach(arrow.body);
        Matter.Body.setPosition(arrow.body,{x:200,y:70});
        arrow.Vaciar();
        gameState = "inicio";
    }
}
  

async function fechaHora(){
    var fechahora = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    var FHjson = await fechahora.json();
    console.log(FHjson);
    var DateTime = FHjson.datetime;
    console.log(DateTime);
    var time = DateTime.slice(11,13);
    console.log(time);
    if(time>6 && time<22){
        background2 = "dia.jpg";
    }
    else{
        background2 = "noche.jpg";
    }

    backgroundImg = loadImage(background2);
}