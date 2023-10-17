// テキスト「キーボード操作に反応する」
let x, y;
const g=1;
const jump=20;
const ground=20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  let gy=height-ground;
  line(0,gy,width,gy);
  y+=vy;
  if(y<height-ground-size/2){vy+=g;}else{vy=0;y=height-ground-size/2}
  ellipse(x, y, size,size);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown("S".charCodeAt(0))){ x-= 10; }
 

 
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
