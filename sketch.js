var hr = hour();
var min = minute();
var sc = second();
var scAngle = map(sc,0,60,0,360);
var minAngle = map(min,0,60,0,360);
var hrAngle = map(hr,0,12,0,360);





function setup() {
  createCanvas(800,500);


  
}

function draw() {
  background(0);  

  seconds();
  minutes();
  hours();



  drawSprites();
}

function seconds(){
  angleMode(DEGREES);
  push();
  translate(400,250);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,70);
  pop();
}

function minutes(){
  angleMode(DEGREES);
  push();
  translate(400,250);
  rotate(minAngle);
  stroke(0,100,0);
  strokeWeight(7);
  line(0,0,100,-25);
  pop();
}

function hours(){
  angleMode(DEGREES);
  push();
  translate(400,250);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,-100,-20);
  pop();
}