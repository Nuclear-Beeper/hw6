// Variables
var ding1
var ding2
var ding3

var img

var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2


// let hit = ['ding1','ding2','ding3'];
//let bounce = random(hit);

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  textAlign(LEFT);
  noStroke();
  fill(30);
}

function preload() {
  soundFormats("wav");
  ding1 = loadSound("ding1.wav");
  ding2 = loadSound("ding2.wav");
  ding3 = loadSound("ding3.wav");
  img = loadImage("stone background.jpg");
}





function draw() {
  background(200);
  //image(img, 0, img.height = 400, img.width = 600);
  image(img, 0, 0 , width, height);
  
  text('Scores',10, 20);
  text(scoreL,50,20);
  text('Scores',535, 20);
  text(scoreR, 575, 20);
  
  // draw left player
 // fill(100);
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  //fill(100);
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  //noStroke();
  ellipse(ballX, ballY, ballSize);
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ding2.play()
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
    fill(random(0,360),random(80,100),random(80,100));
  }
  
   // bounce off left player
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ding1.play()
    ballX = playerWidth
    ballXSpeed = -ballXSpeed
    fill(random(0,360),random(80,100),random(80,100));
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
    
    // playerR scores!
  if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
  }
}
