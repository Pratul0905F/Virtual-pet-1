var dog,happyDog,db,foodS=0,foodStock

function preload()
{
dog=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")

}

function setup() {
createCanvas(1000,500);
dog=createSprite(200,200,50,50)  
dog.scale=0.5
dog.addImage("dog",happyDog)
db=firebase.database()
foodStock=db.ref("Food")
foodStock.on("value",readStock)

}


function draw() {  
background(46,139,87)
textSize(40)
text(foodS,500,400)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)

}
textSize(30)
fill("blue")
text("Press UP Arrow Key To Feed The Dog",500,100)
drawSprites();
}
function readStock(data){
foodS=data.val()
}
function writeStock(x){
if(x<=0){
x=0
}else{
x=x-1
}
db.ref("/").update({Food:x})
}


