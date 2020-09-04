//Create variables here
var pet,dog,dog1;
var database,foods;
function preload(){
dog=loadImage("images/dogimg.png");
dog1=loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  pet=createSprite(200,200,50,50);
  pet.addImage(dog);
  pet.scale=0.2;
  var foodstock=database.ref("food");
  foodstock.on("value",readstock)
}


function draw() {  
 background(46,139,87);
 fill("white");
 textSize(20);
 text("food remaning"+foods,270,200);
 if (keyDown(UP_ARROW)){
   writestock(foods);
   pet.addImage(dog1)
 }
  drawSprites();
  //add styles here

}
function readstock(data){
  foods=data.val();
}
function writestock(x){
  if (x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  })
}

