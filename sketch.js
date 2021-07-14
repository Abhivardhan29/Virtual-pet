var dog,sadDog,happyDog,feedPet,addFood,food,feedDog,addFoods;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  firebase=firebase.database;
  createCanvas(1000,400);
  food=  new Food(350,600);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feedPet =createButton("Feed The Dog");
  feedPet.position(700,95)
  feedPet.mousePressed(feedDog)
  addFood =createButton("Add Food");
  addFood.position(820,95)
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
  food.display();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
