var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, game;
var playerCount=0,gameState=0;
var allPlayers,car1,car2,cars = [ ];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  trackImg = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState(); ///didnt call this function
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount == 2)
  {
    //game.update(1);
    console.log(playerCount);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}