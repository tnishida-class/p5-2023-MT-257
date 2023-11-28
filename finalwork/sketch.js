// 最終課題を制作しよう

//　テキスト「オブジェクト」
//最終課題

let shapes=[];

function setup(){
  createCanvas(windowWidth, windowHeight);
 
  
}

function draw(){
  if (keyIsDown("A".charCodeAt(0))){background(75, 0, 130)}
  else{background(25,25,144)};
  
  
  for(let i = 0; i < shapes.length; i++){
    let s = shapes[i];
    fill(s.color)
    if(s.type === 'star'){
    star(s.x, s.y, s.size);}

    else if(s.type === 'heart'){
      heart(s.x,s.y,s.size);
    }
    s.x += s.vx;
    s.y += s.vy; 
  }

  fill(238,232,170)
  ellipse(width/2,height/2,500);
  
  //白目
 fill(255)
 noStroke()
 ellipse(width/2-100,height/2-50,100);
 ellipse(width/2+100,height/2-50,100);

//黒目
 fill(0)
 noStroke()
 ellipse(width/2-100,height/2-50,85);
 ellipse(width/2+100,height/2-50,85);

 //ハイライト
 if (keyIsDown("A".charCodeAt(0))){fill(255,192,203)}
 else{fill(255)};
 noStroke()
 if (keyIsDown("A".charCodeAt(0))){heart(width/2-100,height/2-70,30)}
 else{ellipse(width/2-100,height/2-70,30)};
 if (keyIsDown("A".charCodeAt(0))){heart(width/2+100,height/2-70,30)}
 else{ellipse(width/2+100,height/2-70,30)};
 

 //ほっぺ
 fill(255,192,203)
 noStroke()
 ellipse(width/2-120,height/2+20,60,40);
 ellipse(width/2+120,height/2+20,60,40);

 fill(178,34,34)
 arc(width/2, height/2+50,100,100,0,PI);

  
}


function star(cx, cy, r){
  noStroke();
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
   
    vertex(x,y);
  }
  endShape(CLOSE);
}
function heart(x, y, size) {//♡をかく関数
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}



function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;

  const s ={
    x: mouseX,
    y: mouseY,
    size: random(10, 100),
    vx: dx+5,
    vy: dy+5,
  };

if (keyIsDown("A".charCodeAt(0))) {//Aを押しているときはハートに
  s.type = 'heart';
  s.color = color(255, 192, 203); // ピンクに
} else {
  s.type = 'star';
  s.color = color(238, 232, 170); // 黄色に
}

shapes.push(s);
} 

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
